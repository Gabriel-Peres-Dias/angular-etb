import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.css']
})
export class VisualizarClienteComponent implements OnInit{

  clientes!: Cliente[];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.clienteService.buscarClientes().subscribe((response: Cliente[]) => {
      this.clientes = response;
    })
  }

  public visualizarCliente(id: number): void {
    this.router.navigate([`cliente/${id}`]);
  }

}
