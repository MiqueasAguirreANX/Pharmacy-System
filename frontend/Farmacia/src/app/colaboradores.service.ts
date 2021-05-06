import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import URL from './URL.json'

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  readonly URL_API = URL.URL;
  constructor(private httpClient: HttpClient) { }

  getColaboradores() {
    return this.httpClient.get<any[]>(this.URL_API + `/colaboradores`)
  }

  postColaborador(nombre: any){
    return this.httpClient.post<any>(this.URL_API +"/colaboradores", nombre);
  }

  deleteColaborador(id: any) {
    return this.httpClient.delete<any>(this.URL_API+`/colaboradores/del/${id}`)
  }
}
