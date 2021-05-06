import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClientesService]
})
export class ClientesComponent implements OnInit {

  clientes: any[] = []
  actualCliente: any = {}
  isActive = false;
  constructor(public bdClientes: ClientesService) { }

  ngOnInit(): void {
    this.bdClientes.getClientes().subscribe(res=>{
      this.clientes = res;
    })
  }
  whatsappCliente(numero: string) {
    window.open(`https://api.whatsapp.com/send?phone=${numero}`)
  }

  setActualCliente(nombre: any) {
    this.bdClientes.getDatosClienteByNombre(nombre).subscribe(res=>{
      this.actualCliente = res
    })
  }

  deleteCliente(nombre: any) {
    let resp = confirm("¿Esta seguro que desea eliminar el cliente?");
    if (resp) {
      this.bdClientes.deleteCliente(nombre).subscribe(res=>{
        console.log(res)
        this.bdClientes.getClientes().subscribe(res1=>{
          this.clientes = res1;
        })
      })
    }
    
  }
}
