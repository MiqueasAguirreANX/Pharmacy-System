import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { BaseDatosService } from 'src/app/base-datos.service';

@Component({
  selector: 'app-ganancia-cliente',
  templateUrl: './ganancia-cliente.component.html',
  styleUrls: ['./ganancia-cliente.component.css'],
  providers: [BaseDatosService, ClientesService]
})
export class GananciaClienteComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] ;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] ;
  private setBarChart() {
    let data: any[] = []
    let clientes: string[] = []
    let datos: { nombre: string, cantidad: number; }[] = []
    this.bd.getItems().subscribe(res=>{
      this.bdClientes.getClientes().subscribe(res1=>{
        for(let cl of res1){
          datos.push({nombre: cl.nombre_completo.split(' ')[0] + " " + cl.nombre_completo.split(' ')[1] , cantidad: 0})
        }
        for(let item of res) {
          let contador = 0;
          for(let cliente of res1) {
            if(cliente.nombre_completo == item.nombre_cliente + " " + item.apellido_cliente) {
              datos[contador].cantidad ++;
            }
            contador++;
          }
        }
        let contador = 0;
        for (let dato of datos.sort(((a,b)=> b.cantidad - a.cantidad))){
          if(contador > 10) break;
          data.push(dato.cantidad);
          clientes.push(dato.nombre);
          contador++;
        }
        this.barChartData = [ 
          { data: data, label: 'Compras cliente', backgroundColor: "#212F3D", hoverBackgroundColor: "#2C7887"}
        ]
        this.barChartLabels = clientes
      })
      
    })
  }

  constructor(public bd: BaseDatosService, public bdClientes: ClientesService) { 
    this.barChartLabels = []
    this.barChartData = []
    this.setBarChart()
  }

  ngOnInit(): void {
  }

}
