import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-visualizar-funcionario',
  templateUrl: './visualizar-funcionario.component.html',
  styleUrls: ['./visualizar-funcionario.component.css']
})
export class VisualizarFuncionarioComponent implements OnInit{

  funcionarios!: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, private router: Router) {}

  ngOnInit(): void {
    this.funcionarioService.buscarFuncionarios().subscribe((response: Funcionario[]) => {
      this.funcionarios = response;
    });
  }

  public visualizarFuncionario(id: number): void {
    this.router.navigate([`funcionario/${id}`]);
  }

}
