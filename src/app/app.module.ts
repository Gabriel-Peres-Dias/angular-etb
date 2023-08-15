import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { CadastroClienteComponent } from './componentes/formulario/cadastro-cliente/cadastro-cliente.component';
import { CadastroEnderecoComponent } from './componentes/formulario/cadastro-endereco/cadastro-endereco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { HeaderComponent } from './componentes/header/header.component';
import { CadastroFuncionarioComponent } from './componentes/formulario/cadastro-funcionario/cadastro-funcionario.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { TableModule } from 'primeng/table';
import { VisualizarClienteComponent } from './componentes/visualizar/visualizar-cliente/visualizar-cliente.component';
import { VisualizarFuncionarioComponent } from './componentes/visualizar/visualizar-funcionario/visualizar-funcionario.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { FuncionarioComponent } from './componentes/funcionario/funcionario.component';
import { EnderecoComponent } from './componentes/endereco/endereco.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    CadastroEnderecoComponent,
    HeaderComponent,
    CadastroFuncionarioComponent,
    PaginaInicialComponent,
    VisualizarClienteComponent,
    VisualizarFuncionarioComponent,
    ClienteComponent,
    FuncionarioComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    TableModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
