import { Component, OnInit } from '@angular/core';
import { CadastroRegiaoComponent } from '../cadastro-regiao/cadastro-regiao.component';
import { CadastroRegiaoService } from '../cadastro-regiao.service';

@Component({
  selector: 'app-lista-regiao',
  templateUrl: './lista-regiao.component.html',
  styleUrls: ['./lista-regiao.component.scss']
})
export class ListaRegiaoComponent implements OnInit {

  listaRegioes=[];

  constructor(private cadastroRegiaoService:CadastroRegiaoService) { }

  ngOnInit() {
    this.getListaRegiao();
  }

  getListaRegiao() {
    this.cadastroRegiaoService.getListaRegiao().subscribe(
      (result:any) => {
        this.listaRegioes = result
      },error => {
        console.log("error", error)
      }
    )
  }

  onStatusChange(event, regiao) {
    console.log(event.target.checked)
    const body = { ...regiao, ativo: event.target.checked }
    this.cadastroRegiaoService.saveStatusRegiao(regiao.id, body)
    .subscribe(result => {
      alert('Salvo com sucesso!')
    }, (error => {
      console.log(error)
    }))
  }
}
