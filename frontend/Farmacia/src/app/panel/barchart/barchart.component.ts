import { ColaboradoresService } from './../../colaboradores.service';
import { BaseDatosService } from './../../base-datos.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
  providers: [BaseDatosService, ColaboradoresService]
})
export class BarchartComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] ;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] ;
  private setBarChart() {
    let colabs: any[] = []
    let data: any[] = []
    this.bdColaboradores.getColaboradores().subscribe(res1=>{
      for(let it of res1) {
        colabs.push(it.nombre)
        data.push(0)
      }
      this.bd.getItems().subscribe(res=>{
        for(let item of res) {
          let contador = 0;
          for(let col of colabs) {
            if(col == item.colaborador) {
              data[contador] ++;
            }
            contador++;
          }
        }
        this.barChartData = [ 
          { data: data, label: 'Cantidad de procolos', backgroundColor: "#4ac", hoverBackgroundColor: "#63D4EC"}
        ]
      })
      this.barChartLabels = colabs
    })
    
  }

  constructor(public bd: BaseDatosService, public bdColaboradores: ColaboradoresService) { 
    this.barChartLabels = []
    this.barChartData = []
    this.setBarChart()
  }

  ngOnInit(): void {
  }

}
