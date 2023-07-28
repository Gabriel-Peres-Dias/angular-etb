import { CadastroClienteComponent } from './componentes/formulario/cadastro-cliente/cadastro-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './componentes/formulario/cadastro-funcionario/cadastro-funcionario.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { VisualizarClienteComponent } from './componentes/visualizar/visualizar-cliente/visualizar-cliente.component';
import { VisualizarFuncionarioComponent } from './componentes/visualizar/visualizar-funcionario/visualizar-funcionario.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { FuncionarioComponent } from './componentes/funcionario/funcionario.component';

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
    component: CadastroClienteComponent
  },
  {
    path: 'cadastro-funcionario',
    component: CadastroFuncionarioComponent
  },
  {
    path: 'listar-clientes',
    component: VisualizarClienteComponent
  },
  {
    path: 'listar-funcionarios',
    component: VisualizarFuncionarioComponent
  },
  {
    path: 'cliente/:id',
    component: ClienteComponent
  },
  {
    path: 'funcionario/:id',
    component: FuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
