import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit{

  funcionario!: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionarioService.buscarFuncionarioPorId(parseInt(id!)).subscribe((response: Funcionario) => {
      this.funcionario = response;
    });
  }

}
