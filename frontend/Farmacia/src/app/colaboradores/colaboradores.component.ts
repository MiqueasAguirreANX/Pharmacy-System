import { ColaboradoresService } from './../colaboradores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'],
  providers: [ColaboradoresService]
})
export class ColaboradoresComponent implements OnInit {

  colaboradores: any[] = [];

  constructor(public bdColaboradores: ColaboradoresService) { }

  ngOnInit(): void {
    this.bdColaboradores.getColaboradores().subscribe(res=>{
      this.colaboradores = res;
    })
  }
  eliminarColaborador(id: any) {
    this.bdColaboradores.deleteColaborador(id).subscribe(res1=>{
      console.log("Eliminado", res1)
      this.bdColaboradores.getColaboradores().subscribe(res=>{
        this.colaboradores = res;
      });
    })
  }
  agregarColaborador(i_colab: any) {
    this.bdColaboradores.postColaborador({nombre: i_colab.value}).subscribe(res1=>{
      this.bdColaboradores.getColaboradores().subscribe(res=>{
        this.colaboradores = res;
      });
      i_colab.value="";
    })
  }

}
