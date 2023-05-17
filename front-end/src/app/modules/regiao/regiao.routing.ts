import { RouterModule, Routes } from '@angular/router';
import { RegiaoComponent } from './regiao.component';
import { CadastroRegiaoComponent } from './cadastro-regiao/cadastro-regiao.component';

const routes: Routes = [
  {
    path: '',
    component: RegiaoComponent,
  },
  {
    path: 'cadastro',
    component: CadastroRegiaoComponent,
  },
  {
    path: 'cadastro/:id',
    component: CadastroRegiaoComponent,
  },

];

export const  RegiaoRoutingModule = RouterModule.forChild(routes);
