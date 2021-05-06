import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  verBarColaborador: boolean = false;
  verBarGanancia: boolean = false;
  verBarCliente: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  setVerBarColaborador(){
    this.verBarColaborador = true;
    this.verBarGanancia = false;
    this.verBarCliente = false;
  }
  setVerBarGanancia(){
    this.verBarColaborador = false;
    this.verBarGanancia = true;
    this.verBarCliente = false;
  }
  setVerBarCliente(){
    this.verBarColaborador = false;
    this.verBarGanancia = false;
    this.verBarCliente = true;
  }

}
