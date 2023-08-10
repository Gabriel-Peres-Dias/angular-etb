import { Injectable } from '@angular/core';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class RecuperarLoginService {

  constructor() { }

  private funcionarioLogado!: Funcionario;

  public setarDados(dadosFuncionario: Funcionario): void {
    this.funcionarioLogado = dadosFuncionario;
    localStorage.setItem('funcionarioLogado', JSON.stringify(this.funcionarioLogado));
  }

  public deslogar(): void {
    localStorage.clear();
  }
}
