import { Component, Input, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent {

@Input() endereco!: Endereco;

}
