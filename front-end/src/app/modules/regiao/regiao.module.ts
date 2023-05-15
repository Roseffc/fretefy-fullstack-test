import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiaoComponent } from './regiao.component';
import { RegiaoRoutingModule } from './regiao.routing';

import { CadastroRegiaoComponent } from './cadastro-regiao/cadastro-regiao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaRegiaoComponent } from './lista-regiao/lista-regiao.component';
import { SeletorCidadesComponent } from './seletor-cidades/seletor-cidades.component';

@NgModule({
  imports: [
    CommonModule,
    RegiaoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    RegiaoComponent,
    ListaRegiaoComponent,
    CadastroRegiaoComponent,
    SeletorCidadesComponent
  ],
  exports: [RegiaoComponent]
})
export class RegiaoModule { }
