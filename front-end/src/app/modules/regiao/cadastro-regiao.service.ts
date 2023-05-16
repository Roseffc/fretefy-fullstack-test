import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroRegiaoService {

constructor(private httpClient:HttpClient) { }

getListaRegiao() {
  return this.httpClient.get(`${environment.urlApi}/regiao`)
}

getListaCidades() {
  return this.httpClient.get(`${environment.urlApi}/cidades`)
}

}


