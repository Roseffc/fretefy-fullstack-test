import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiaoComponent } from './regiao.component';
import { RegiaoRoutingModule } from './regiao.routing';

import { CadastroRegiaoComponent } from './cadastro-regiao/cadastro-regiao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaRegiaoComponent } from './lista-regiao/lista-regiao.component';
import { SeletorCidadesComponent } from './seletor-cidades/seletor-cidades.component';
import { CadastroRegiaoService } from './cadastro-regiao.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RegiaoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    RegiaoComponent,
    ListaRegiaoComponent,
    CadastroRegiaoComponent,
    SeletorCidadesComponent
  ],
  exports: [RegiaoComponent],
  providers:[CadastroRegiaoService]
})
export class RegiaoModule { }
