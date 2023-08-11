import { CadastroClienteComponent } from './componentes/formulario/cadastro-cliente/cadastro-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './componentes/formulario/cadastro-funcionario/cadastro-funcionario.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { VisualizarClienteComponent } from './componentes/visualizar/visualizar-cliente/visualizar-cliente.component';
import { VisualizarFuncionarioComponent } from './componentes/visualizar/visualizar-funcionario/visualizar-funcionario.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { FuncionarioComponent } from './componentes/funcionario/funcionario.component';
import { autenticadorDeRota } from './seguranca/service.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-inicial',
    pathMatch: 'full'
  },
  {
    path: 'pagina-inicial',
    component: PaginaInicialComponent
  },
  {
    path: 'cadastro-cliente',
    component: CadastroClienteComponent,
    canActivate: [autenticadorDeRota]
  },
  {
    path: 'cadastro-funcionario',
    component: CadastroFuncionarioComponent
  },
  {
    path: 'listar-clientes',
    component: VisualizarClienteComponent,
    canActivate: [autenticadorDeRota]
  },
  {
    path: 'listar-funcionarios',
    component: VisualizarFuncionarioComponent,
    canActivate: [autenticadorDeRota]
  },
  {
    path: 'cliente/:id',
    component: ClienteComponent,
    canActivate: [autenticadorDeRota]
  },
  {
    path: 'funcionario/:id',
    component: FuncionarioComponent,
    canActivate: [autenticadorDeRota]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
