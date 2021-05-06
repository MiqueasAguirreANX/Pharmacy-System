import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import URL from './URL.json'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  readonly URL_API = URL.URL;
  constructor(private httpClient: HttpClient) { }

  getDatosClienteByNombre(nombre: string) {
    return this.httpClient.get<any>(this.URL_API + `/clientes/${nombre.split(" ")[0]}/${nombre.split(" ")[1]}`)
  }

  getDatosClientesByDNI(dni: string) {
    return this.httpClient.get<any>(this.URL_API + `/clientes/dni/${dni}`)
  }

  getClientes() {
    return this.httpClient.get<any[]>(this.URL_API + "/clientes")
  }

  postCliente(cliente: any) {
    return this.httpClient.post<any>(this.URL_API + "/clientes", cliente)
  }

  patchCliente(cliente: any) {
    return this.httpClient.patch<any>(this.URL_API + "/clientes", cliente)
  }

  deleteCliente(nombre: any) {
    return this.httpClient.delete<any>(this.URL_API + `/clientes/${nombre.split(" ")[0]}/${nombre.split(" ")[1]}`)
  }
}
