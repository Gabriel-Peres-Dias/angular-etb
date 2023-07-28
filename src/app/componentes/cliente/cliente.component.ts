import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Endereco } from 'src/app/model/endereco';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente!: Cliente;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService.buscarClientePorId(parseInt(id!)).subscribe((response: Cliente) => {
      this.cliente = response;
    })
  }

}
