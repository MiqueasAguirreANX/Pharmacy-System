import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import URL from './URL.json'

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  readonly URL_API = URL.URL;
  constructor(private httpClient: HttpClient) { }

  getServicios() {
    return this.httpClient.get<any[]>(this.URL_API+"/servicios")
  }
  postServicio(servicio: any) {
    return this.httpClient.post<any>(this.URL_API+"/servicios", servicio)
  }
  deleteServicio(id: any) {
    return this.httpClient.delete<any>(this.URL_API+`/servicios/${id}`)
  }
}
