import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  providers: [ServiciosService]
})
export class ServiciosComponent implements OnInit {

  servicios: any[]=[]
  constructor(public bdServicio: ServiciosService) { }

  ngOnInit(): void {
    this.bdServicio.getServicios().subscribe(res=>{
      this.servicios = res;
    })
  }
  agregarServicio(servicio: any){
    let serv = {
      servicio: servicio.value
    }
    if (serv.servicio != "") 
      this.bdServicio.postServicio(serv).subscribe(res=>{
        console.log(res, serv)
        this.bdServicio.getServicios().subscribe(res1=>{
          this.servicios = res1;
        });
        servicio.value = ""
      })
  }
  eliminarServicio(id: any) {
    this.bdServicio.deleteServicio(id).subscribe(res=>{
      console.log(res, id)
      this.bdServicio.getServicios().subscribe(res1=>{
        this.servicios = res1;
      })
    })
  }

}
