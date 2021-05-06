import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { BaseDatosService } from 'src/app/base-datos.service';

@Component({
  selector: 'app-ganancia',
  templateUrl: './ganancia.component.html',
  styleUrls: ['./ganancia.component.css'],
  providers: [BaseDatosService]
})
export class GananciaComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] ;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] ;
  private setBarChart() {
    let meses: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
    let data: number[] = [0,0,0,0,0,0,0,0,0,0,0,0]
    this.bd.getItems().subscribe(res=>{
      for(let item of res) {
        for(let mes of meses) {
          if(mes == item.fecha.split("/")[1]) {
            console.log(item.fecha.split("/")[1])
            if (item.costo)
              data[mes] += parseFloat(item.costo);
          }
        }
      }
      console.log(data)
      this.barChartData = [ 
        { data: data, label: 'Ganancia mensual', backgroundColor: "#196F3D", hoverBackgroundColor: "#2ECC71"}
      ]
    })
    
  }

  constructor(public bd: BaseDatosService) { 
    this.barChartLabels = ["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre", "Octubre","Noviembre", "Diciembre"]
    this.barChartData = []
    this.setBarChart()
  }

  ngOnInit(): void {
  }

}
