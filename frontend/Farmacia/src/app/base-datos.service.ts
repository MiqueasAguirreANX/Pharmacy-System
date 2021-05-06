import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import URL from './URL.json'

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  items: Array<any> = [];
  readonly URL_API = URL.URL;
  constructor(private httpClient: HttpClient) { }


  // GET


  getItems() {
    return this.httpClient.get<any[]>(this.URL_API )
  }
  getItemsByNroProt(nro: number) {
    return this.httpClient.get<any[]>(this.URL_API+ `/nro/${nro}`)
  }
  getItemsByDate(date: string) {
    return this.httpClient.get<any[]>(this.URL_API + `/date/${date}`)
  }
  getItemsByNombre(nombre: string){
    return this.httpClient.get<any[]>(this.URL_API + `/nombre/${nombre}`)
  }
  getItemsByApellido(apellido: string){
    return this.httpClient.get<any[]>(this.URL_API + `/apellido/${apellido}`)
  }
  getItemsByState(state: string) {
    return this.httpClient.get<any[]>(this.URL_API + `/state/${state}`)
  }
  getItemsByDNI(dni: number) {
    return this.httpClient.get<any[]>(this.URL_API + `/dni/${dni}`)
  }

  getItemsByDescripcion(descripcion: string) {
    return this.httpClient.post<any[]>(this.URL_API + `/observaciones`, {descripcion})
  }
  
  
  


  // POST


  postProtocolo(protocolo: any) {
    return this.httpClient.post<any>(this.URL_API, protocolo)
  }
  
  

  // PATCH 


  patchEstadoProtocolo(estado: any) {
    return this.httpClient.patch<any>(this.URL_API + "/cambiar/estado", estado)
  }
  patchPagadoProtocolo(pagado: any) {
    return this.httpClient.patch<any>(this.URL_API + "/cambiar/pagado", pagado)
  }

  patchProtocolo(protocolo: any) {
    return this.httpClient.patch<any>(this.URL_API, protocolo)
  }

  //  DELETE

  
  deleteProtocolo(id: any) {
    return this.httpClient.delete<any>(this.URL_API + `/${id}`)
  }

}
