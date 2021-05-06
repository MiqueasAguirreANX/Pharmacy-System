import { ServiciosService } from './../servicios.service';
import { ClientesService } from './../clientes.service';
import { ColaboradoresService } from './../colaboradores.service';
import { BaseDatosService } from './../base-datos.service';
import { Component, forwardRef, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [BaseDatosService, ColaboradoresService, ClientesService, ServiciosService]
})
export class ItemsComponent implements OnInit {

  isActive: boolean;
  isActiveEditar: boolean;
  verProtocolos: boolean;
  verAgregar: boolean = false;
  verBuscar: boolean = false;
  actualItem: any;
  anteriores: any[] = [];
  resultados_busqueda: any[] = [];
  servicios: any[]= [];
  buscarActualItem: any;
  puedeCambiar: boolean = true;
  colaboradores: any[] = [];
  actualVerProtocolos: any[] = [];
  estaPagado: boolean = false;
  constructor(
    public bd: BaseDatosService,
    public bdColaboradores: ColaboradoresService,
    public bdClientes: ClientesService,
    public bdServicios: ServiciosService
    ) {
    this.isActive = false;
    this.isActiveEditar = false;
    this.verProtocolos = false;
    this.actualItem = {}
  }

  ngOnInit(): void {
    this.bdColaboradores.getColaboradores().subscribe(res=>{
      this.colaboradores = res
    });
    this.bdServicios.getServicios().subscribe(res=>{
      this.servicios = res
    });
  }
  setActualItem(cod: number){
    for (let _item of this.bd.items) {
      if (_item.nro_protocolo == cod) {
        this.actualItem = {
          nro_protocolo: _item.nro_protocolo,
          fecha: _item.fecha,
          nombre_cliente: _item.nombre_cliente ? _item.nombre_cliente: "",
          apellido_cliente: _item.apellido_cliente ? _item.apellido_cliente: "",
          tel_fijo: _item.tel_fijo ? _item.tel_fijo: "",
          tel_celular: _item.tel_celular ? _item.tel_celular: "",
          dni: _item.dni ? _item.dni: "",
          email: _item.email ? _item.email: "",
          domicilio: _item.domicilio ? _item.domicilio: "",
          entre_calles:_item.entre_calles ? _item.entre_calles: "",
          cp: _item.cp ? _item.cp: "",
          observaciones: _item.observaciones ? _item.observaciones: "",
          costo_proveedor: _item.costo_proveedor ?  _item.costo_proveedor: "",
          deposito: _item.deposito ?  _item.deposito: "",
          costo: _item.costo ? _item.costo: "",
          senia: _item.senia ? _item.senia: "",
          servicio: _item.servicio,
          colaborador: _item.colaborador,
          estado: _item.estado,
          entregado_prov: _item.entregado_prov,
          delivery: _item.delivery,
          fecha_vencimiento: _item.fecha_vencimiento ? _item.fecha_vencimiento: ""
        };
      } 
    }
  }

  setModal1() {
    console.log("Abriendo modal 1")
    this.isActive = true
  }

  setModal2() {
    console.log("Abriendo modal 2")
    this.isActiveEditar = true;
  }
  cambiarProtocolo(i_dni:any, i_nombre:any, i_apellido:any, i_tel_fijo:any, i_tel_cel:any, i_email:any, i_domicilio:any, i_entre:any, i_cp:any, select_servicios:any, i_costo_proveedor:any, i_deposito: any, i_costo:any, i_senia:any, select_colaborador:any, select_estado:any, i_fecha_vencimiento:any, r_entregado_si:any, r_pagado_si:any, r_delivery_si:any, i_observaciones:any){
    console.log("CAMBIANDO EL PROTOCOLO");
    //nro_protocolo: this.actualItem.nro_protocolo,
    // Dos tareas
    let protocolo = {
      nro_protocolo: this.actualItem.nro_protocolo,
      nombre_cliente : <string>(i_nombre.value).toLowerCase(),
      apellido_cliente : <string>(i_apellido.value).toLowerCase(),
      dni : i_dni.value.indexOf(".") == -1 ? i_dni.value : i_dni.value.replace(".", ""),
      tel_fijo : i_tel_fijo.value,
      tel_celular : i_tel_cel.value.slice(0, 4) != "+549" ? "+549"+i_tel_cel.value : i_tel_cel.value,
      email : i_email.value,
      domicilio : i_domicilio.value,
      entre_calles : i_entre.value,
      cp : i_cp.value,
      servicio : select_servicios.selectedOptions[0].childNodes[0].data,
      observaciones : i_observaciones.value,
      costo_proveedor : parseFloat(i_costo_proveedor.value),
      deposito: parseFloat(i_deposito.value),
      costo : parseFloat(i_costo.value),
      senia : parseFloat(i_senia.value),
      falta_abonar : parseFloat(i_costo.value)-parseFloat(i_senia.value),
      pagado : r_pagado_si.checked ? "Si" : "No",
      delivery : r_delivery_si.checked ? "Si" : "No",
      colaborador : select_colaborador.selectedOptions[0].childNodes[0].data,
      estado : select_estado.selectedOptions[0].childNodes[0].data,
      fecha_vencimiento : i_fecha_vencimiento.value ? `${i_fecha_vencimiento.value.split("-")[2]}/${i_fecha_vencimiento.value.split("-")[1]}/${i_fecha_vencimiento.value.split("-")[0]}`: "",
      entregado_prov : r_entregado_si.checked ? "Si" : "No"
    }
    let cliente = {
      nro_dni : i_dni.value.indexOf(".") == -1 ? i_dni.value : i_dni.value.replace(".", ""),
      nombre_completo : `${i_nombre.value.toLowerCase()} ${i_apellido.value.toLowerCase()}`,
      tel_fijo : i_tel_fijo.value,
      tel_celular : i_tel_cel.value.slice(0, 4) != "+549" ? "+549"+i_tel_cel.value : i_tel_cel.value,
      email : i_email.value,
      domicilio : i_domicilio.value,
      entre_calles : i_entre.value,
      cp : i_cp.value,
    }
    this.bd.patchProtocolo(protocolo).subscribe((res)=>{
      this.bd.getItems().subscribe(res1=>{
        this.bd.items = res1
      })
    })
    this.bdClientes.patchCliente(cliente).subscribe(res=>{
      console.log(res)
    })

    this.isActiveEditar = false
  }

  setVerProtocolos() {
    if (this.verProtocolos) {
      this.verProtocolos = false;
    } else {
      this.bd.getItems().subscribe(res=>{
        this.bd.items = res;
      });
      this.verAgregar = false;
      this.verBuscar = false;
      this.verProtocolos = true;
    }
  }
  setAgregarProtocolo() {
    if (this.verAgregar) {
      this.verAgregar = false;
    } else {
      this.bd.getItems().subscribe(res=>{
        this.bd.items = res;
      });
      this.verAgregar = true;
      this.verBuscar = false;
      this.verProtocolos = false;
    }
  }
  setBuscarProtocolos() {
    if (this.verBuscar) {
      this.verBuscar = false;
    } else {
      this.bd.getItems().subscribe(res=>{
        this.bd.items = res;
      });
      this.verAgregar = false;
      this.verBuscar = true;
      this.verProtocolos = false;
    }
  }
  buscarPor(_select: any, _criterio: any) {
    console.log("BUSCANDO")
    // _select.selectedOptions[0].childNodes[0].data return la opcion seleccionada
    if (_criterio.value != "") {
      if (_select.selectedOptions[0].childNodes[0].data == "Numero protocolo") {
        this.bd.getItemsByNroProt(parseInt(_criterio.value)).subscribe(res=>{
          this.resultados_busqueda = res;
          this.buscarActualItem = res[0];
        });
        this.puedeCambiar = false;
      } else if (_select.selectedOptions[0].childNodes[0].data == "Fecha") {
        this.bd.getItemsByDate(_criterio.value).subscribe(res=>{
          this.resultados_busqueda = res;
        })
        this.puedeCambiar = true;
      } else if (_select.selectedOptions[0].childNodes[0].data == "Nombre") {
        let nombre = _criterio.value
        this.bd.getItemsByNombre(nombre.toLowerCase()).subscribe(res=>{
          this.resultados_busqueda = res;
        });
        this.puedeCambiar = true;
      } else if (_select.selectedOptions[0].childNodes[0].data == "Apellido") {
        let apellido = _criterio.value
        this.bd.getItemsByApellido(apellido.toLowerCase()).subscribe(res=>{
          this.resultados_busqueda = res;
        });
        this.puedeCambiar = true;

      } else if (_select.selectedOptions[0].childNodes[0].data == "Estado") {
        this.bd.getItemsByState(_criterio.value).subscribe(res=>{
          this.resultados_busqueda = res;
        });
        this.puedeCambiar = true;
      } else if (_select.selectedOptions[0].childNodes[0].data == "DNI") {
        this.bd.getItemsByDNI(parseInt(_criterio.value)).subscribe(res=>{
          this.resultados_busqueda = res;
        });
        this.puedeCambiar = true;
      } else if (_select.selectedOptions[0].childNodes[0].data == "Observaciones") {
        this.bd.getItemsByDescripcion(_criterio.value).subscribe(res=>{
          this.resultados_busqueda = res;
        });
        this.puedeCambiar = true;
      }
      
    }
  }
  buscarAnteriores(i_dni: any, i_nombre: any, i_apellido:any, i_tel_fijo:any, i_tel_cel:any, i_email:any, i_domicilio:any, i_entre_calles:any, i_cp:any){
    this.bdClientes.getDatosClienteByNombre(`${i_nombre.value} ${i_apellido.value}`).subscribe(res=>{
      console.log("RES:", res);
      if (res) {
        i_nombre.value        = i_nombre.value;
        i_apellido.value      = i_apellido.value;
        i_dni.value           = res.nro_dni,
        i_tel_fijo.value      = res.tel_fijo;
        i_tel_cel.value       = res.tel_celular;
        i_email.value         = res.email;
        i_domicilio.value     = res.domicilio;
        i_entre_calles.value  = res.entre_calles;
        i_cp.value            = res.cp;
      } else {
        alert('Datos no encontrados');
        i_nombre.value    = "";
        i_apellido.value  = "";
        i_dni.value       = "";
        i_tel_fijo.value  = "";
        i_tel_cel.value   = "";
        i_email.value     = "";
        i_domicilio.value = "";
        i_cp.value        = "";
      }
    });
    
    this.bd.getItemsByNombre(i_nombre.value).subscribe(res => {
      if (res.length > 6) {
        this.anteriores = res.slice(-6)
      } else {
        this.anteriores = res;
      }
    });
  }
  agregarProtocolo(i_dni:any, i_nombre:any, i_apellido:any, i_tel_fijo:any, i_tel_cel:any, i_email:any, i_domicilio:any, i_entre:any, i_cp:any, select_servicios:any, i_costo_proveedor:any, i_deposito:any, i_costo:any, i_senia:any, select_colaborador:any, select_estado:any, i_fecha_vencimiento:any, r_entregado_si:any, r_pagado_si:any, r_delivery_si:any, i_observaciones:any, checkObservaciones: any){
    // Dos tareas
    let fecha = new Date();
    let protocolo = {
      fecha : `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`,
      nombre_cliente : i_nombre.value.toLowerCase(),
      apellido_cliente : i_apellido.value.toLowerCase(),
      dni : i_dni.value.indexOf(".") == -1 ? i_dni.value : i_dni.value.replace(".", ""),
      tel_fijo : i_tel_fijo.value,
      tel_celular : i_tel_cel.value.slice(0, 4) != "+549" ? "+549"+i_tel_cel.value : i_tel_cel.value,
      email : i_email.value,
      domicilio : i_domicilio.value,
      entre_calles : i_entre.value,
      cp : i_cp.value,
      servicio : select_servicios.selectedOptions[0].childNodes[0].data,
      observaciones : i_observaciones.value,
      costo_proveedor : parseFloat(i_costo_proveedor.value),
      deposito: parseFloat(i_deposito.value),
      costo : parseFloat(i_costo.value),
      senia : parseFloat(i_senia.value),
      falta_abonar : parseFloat(i_costo.value)-parseFloat(i_senia.value),
      pagado : r_pagado_si.checked ? "Si" : "No",
      delivery : r_delivery_si.checked ? "Si" : "No",
      colaborador : select_colaborador.selectedOptions[0].childNodes[0].data,
      estado : select_estado.selectedOptions[0].childNodes[0].data,
      fecha_vencimiento : i_fecha_vencimiento.value ? `${i_fecha_vencimiento.value.split("-")[2]}/${i_fecha_vencimiento.value.split("-")[1]}/${i_fecha_vencimiento.value.split("-")[0]}`: "",
      entregado_prov : r_entregado_si.checked ? "Si" : "No"
    }
    let cliente = {
      nro_dni : i_dni.value.indexOf(".") == -1 ? i_dni.value : i_dni.value.replace(".", ""),
      nombre_completo : `${i_nombre.value.toLowerCase()} ${i_apellido.value.toLowerCase()}`,
      tel_fijo : i_tel_fijo.value,
      tel_celular : i_tel_cel.value.slice(0, 4) != "+549" ? "+549"+i_tel_cel.value : i_tel_cel.value,
      email : i_email.value,
      domicilio : i_domicilio.value,
      entre_calles : i_entre.value,
      cp : i_cp.value,
    }
    //Agregar el item a la bd protocolos despues de validarlos
    this.bd.postProtocolo(protocolo).subscribe(res => {
      if (checkObservaciones.checked) {
        const doc = new jsPDF();
        /*
        FARMACIA YUVONE
        Protocolo Nº xxxx
        Fecha
        Servicio
        Nombre
        Observaciones:
        */
        doc.setFontSize(40)
        doc.setTextColor(25, 111, 61)
        doc.text('FARMACIA YUVONE', 30, 20);
        doc.setFontSize(28)
        doc.setTextColor(29, 33, 34)
        doc.text(`Protocolo N°: ${res.protocolo_id}`, 30, 35);
        doc.text(`Fecha: ${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`, 30, 50);
        doc.text(`Servicio: ${select_servicios.selectedOptions[0].childNodes[0].data}`, 30, 65);
        doc.text(`Nombre: ${i_nombre.value} ${i_apellido.value}`, 30, 80);
        let frases = "";
        let contador = 0;
        for (let palabra of i_observaciones.value.split(" ")){
          if(contador>3){
            contador=0;
            frases+="\n"
          } 
          frases+=` ${palabra}`
          contador++
        }
        doc.text(`Observaciones:`, 30,95)
        doc.setFontSize(21)
        doc.text(`${frases}`, 30, 110);
        doc.save(`factura_unica_${res.protocolo_id}.pdf`)
      } else {
        const doc = new jsPDF();
        /*
        FARMACIA YUVONE
        Protocolo Nº xxxx
        Fecha
        Servicio
        Nombre
        Observaciones:
        */
        doc.setFontSize(40)
        doc.setTextColor(25, 111, 61)
        doc.text('FARMACIA YUVONE', 30, 20);
        doc.setFontSize(28)
        doc.setTextColor(29, 33, 34)
        doc.text(`Protocolo N°: ${res.protocolo_id}`, 30, 35);
        doc.text(`Fecha: ${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`, 30, 50);
        doc.text(`Servicio: ${select_servicios.selectedOptions[0].childNodes[0].data}`, 30, 65);
        doc.text(`Nombre: ${i_nombre.value} ${i_apellido.value}`, 30, 80);
        let frases = "";
        let contador = 0;
        for (let palabra of i_observaciones.value.split(" ")){
          if(contador>3){
            contador=0;
            frases+="\n"
          } 
          frases+=` ${palabra}`
          contador++
        }
        doc.text(`Observaciones:`, 30,95)
        doc.setFontSize(21)
        doc.text(`${frases}`, 30, 110);
        doc.save(`factura_farmacia_${res.protocolo_id}.pdf`)

        const doc1 = new jsPDF();
        /*
        FARMACIA YUVONE
        Protocolo Nº xxxx
        Fecha
        Servicio
        Nombre
        Observaciones:
        */
        doc1.setFontSize(40)
        doc1.setTextColor(25, 111, 61)
        doc1.text('FARMACIA YUVONE', 30, 20);
        doc1.setFontSize(28)
        doc1.setTextColor(29, 33, 34)
        doc1.text(`Protocolo N°: ${res.protocolo_id}`, 30, 35);
        doc1.text(`Fecha: ${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`, 30, 50);
        doc1.text(`Servicio: ${select_servicios.selectedOptions[0].childNodes[0].data}`, 30, 65);
        doc1.text(`Nombre: ${i_nombre.value} ${i_apellido.value}`, 30, 80);
        doc1.save(`factura_cliente_${res.protocolo_id}.pdf`)
      }
      
      
      
      // Agregar los datos a la bd clientes para futuras busquedas
    
      this.bdClientes.postCliente(cliente).subscribe(res => {
        console.log(res)
      });
      // Reset all TODO
      let inputs = [
        i_dni, i_nombre, i_apellido, i_tel_fijo, i_tel_cel,
        i_email, i_domicilio, i_entre, i_cp, i_observaciones,
        i_costo_proveedor, i_deposito, i_costo, i_senia
      ]
      inputs.forEach(item=>{
        item.value = "";
      });
      // Change the items again
      this.bd.getItems().subscribe(res=>{
        this.bd.items = res;
      });
    });
    

  }
  infoProtocolo(ant:any) {
    this.setActualItem(ant.nro_protocolo)
    this.isActive=!this.isActive
  }
  cambiarEstadoBuscado(selectCambiarEstado: any) {
    let estado = {
      estado: selectCambiarEstado.selectedOptions[0].childNodes[0].data,
      nro_protocolo: this.buscarActualItem.nro_protocolo
    }
    this.bd.patchEstadoProtocolo(estado).subscribe(res => {
      console.log(res);
    });
    this.bd.getItemsByNroProt(parseInt(this.buscarActualItem.nro_protocolo)).subscribe(res=>{
      this.resultados_busqueda = res;
      this.buscarActualItem = res[0];
    });
  }
  cambiarPagadoBuscado(selectCambiarPagado: any) {
    let pagado = {
      pagado: selectCambiarPagado.selectedOptions[0].childNodes[0].data,
      nro_protocolo: this.buscarActualItem.nro_protocolo
    }
    this.bd.patchPagadoProtocolo(pagado).subscribe(res => {
      console.log(res);
    });
    this.bd.getItemsByNroProt(parseInt(this.buscarActualItem.nro_protocolo)).subscribe(res=>{
      this.resultados_busqueda = res;
      this.buscarActualItem = res[0];
    });
  }
  whatsappCliente(numero:any){
    window.open(`https://api.whatsapp.com/send?phone=${numero}`)
  }

  descargarProtocolo() {
    console.log("Imprimiendo protocolo: ", this.actualItem)
    const doc = new jsPDF();
    doc.setFontSize(40)
    doc.setTextColor(25, 111, 61)
    doc.text('FARMACIA YUVONE', 30, 20);
    doc.setFontSize(28)
    doc.setTextColor(29, 33, 34)
    doc.text(`Protocolo N°: ${this.actualItem.nro_protocolo}`, 30, 35);
    doc.text(`Fecha: ${this.actualItem.fecha}`, 30, 50);
    doc.text(`Servicio: ${this.actualItem.servicio}`, 30, 65);
    doc.text(`Nombre: ${this.actualItem.nombre_cliente} ${this.actualItem.apellido_cliente}`, 30, 80);
    let frases = "";
    let contador = 0;
    for (let palabra of this.actualItem.observaciones.split(" ")){
      if(contador>3){
        contador=0;
        frases+="\n"
      } 
      frases+=` ${palabra}`
      contador++
    }
    doc.text(`Observaciones:`, 30,95)
    doc.setFontSize(21)
    doc.text(`${frases}`, 30, 110);
    doc.save(`factura_unica_${this.actualItem.nro_protocolo}.pdf`)
  }

  deleteProtocolo(id: any, _select: any, _criterio: any) {
    let resp = confirm("¿Esta seguro que desea eliminar el protocolo?");
    if (resp) {
      this.bd.deleteProtocolo(id).subscribe(res=>{
        console.log(res)
        this.bd.getItems().subscribe(res1=>{
          this.bd.items = res1;
        })
        if (_select && _criterio) {
          if (_select.selectedOptions[0].childNodes[0].data == "Numero protocolo") {
            this.bd.getItemsByNroProt(parseInt(_criterio.value)).subscribe(res=>{
              this.resultados_busqueda = res;
              this.buscarActualItem = res[0];
            });
            this.puedeCambiar = false;
          } else if (_select.selectedOptions[0].childNodes[0].data == "Fecha") {
            this.bd.getItemsByDate(_criterio.value).subscribe(res=>{
              this.resultados_busqueda = res;
            })
            this.puedeCambiar = true;
          } else if (_select.selectedOptions[0].childNodes[0].data == "Nombre") {
            let nombre = _criterio.value
            this.bd.getItemsByNombre(nombre.toLowerCase()).subscribe(res=>{
              this.resultados_busqueda = res;
            });
            this.puedeCambiar = true;
          } else if (_select.selectedOptions[0].childNodes[0].data == "Apellido") {
            let apellido = _criterio.value
            this.bd.getItemsByApellido(apellido.toLowerCase()).subscribe(res=>{
              this.resultados_busqueda = res;
            });
            this.puedeCambiar = true;
    
          } else if (_select.selectedOptions[0].childNodes[0].data == "Estado") {
            this.bd.getItemsByState(_criterio.value).subscribe(res=>{
              this.resultados_busqueda = res;
            });
            this.puedeCambiar = true;
          } else if (_select.selectedOptions[0].childNodes[0].data == "DNI") {
            this.bd.getItemsByDNI(parseInt(_criterio.value)).subscribe(res=>{
              this.resultados_busqueda = res;
            });
            this.puedeCambiar = true;
          }
        }
      })
    }
    
  }

  calcularFaltante(costo: any, senia: any) {
    if(costo.value && senia.value) {
      alert(`EL FALTANTE ES ${parseFloat(costo.value)-parseFloat(senia.value)}`)
    } else {
      alert("ERROR! DATOS FALTANTES")
    }
  }

  listaNumeros() {
    let lista = []
    console.log("l: "+<number>this.bd.items.length+" , res:"+ Math.floor(<number>this.bd.items.length / 75))
    for (let i = 0; i < Math.floor(<number>this.bd.items.length / 75) + 1 ; i++) {
      lista.push(i)
    }
    return lista
  }

  setActualVerProtocolo(n: number) {
    this.actualVerProtocolos = []
    this.bd.getItems().subscribe(res=>{
      for(let i = n*75; i < ((n+1)*75); i++){
        if (i < res.length) {
          this.actualVerProtocolos.push(res[i]);
        } 
      }
    })
    
  }
}
