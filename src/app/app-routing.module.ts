import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarNomesComponent } from './cadastrar-nomes/cadastrar-nomes.component';
import { ListarNomesComponent } from './listar-nomes/listar-nomes.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lista' },
  { path: 'cadastro', component: CadastrarNomesComponent },
  { path: 'lista', component: ListarNomesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
