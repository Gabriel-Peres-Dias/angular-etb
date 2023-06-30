import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ClienteComponent } from './componentes/formulario/cliente/cliente.component';
import { EnderecoComponent } from './componentes/formulario/endereco/endereco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
