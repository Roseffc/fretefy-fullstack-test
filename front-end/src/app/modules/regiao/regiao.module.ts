import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiaoComponent } from './regiao.component';
import { RegiaoRoutingModule } from './regiao.routing';
import { ListaRegiaoComponent } from './lista-regiao/lista-regiao.component';
import { CadastroRegiaoComponent } from './cadastro-regiao/cadastro-regiao.component';

@NgModule({
  imports: [
    CommonModule,
    RegiaoRoutingModule
  ],
  declarations: [
    RegiaoComponent,
    ListaRegiaoComponent,
    CadastroRegiaoComponent
  ],
  exports: [RegiaoComponent]
})
export class RegiaoModule { }
