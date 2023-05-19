import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroRegiaoService {
  constructor(private httpClient: HttpClient) {}

  getListaRegiao() {
    return this.httpClient.get(`${environment.urlApi}/regiao`)
    .pipe(take(1));
  }

  getRegiao(id) {
    return this.httpClient.get(`${environment.urlApi}/regiao/${id}`)
    .pipe(take(1));
  }

  getListaCidades() {
    return this.httpClient.get(`${environment.urlApi}/cidades`)
    .pipe(take(1));
  }

  saveStatusRegiao(id, body) {
    return this.httpClient.patch(`${environment.urlApi}/regiao/${id}`, body)
    .pipe(take(1));
  }

  SaveRegiao(body) {
    return this.httpClient.post(`${environment.urlApi}/regiao`, body)
    .pipe(take(1));
  }

  getRegiaoByName(nome) {
    return this.httpClient.get(`${environment.urlApi}/regiao?nome=${nome}`).toPromise()
  }

}
