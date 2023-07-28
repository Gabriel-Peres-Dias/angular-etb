import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../model/funcionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  private readonly API = `${environment.API}/funcionario`;

  public buscarFuncionarioPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.API}/${id}`)
  }

  public buscarFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API)
  }

  public cadastrarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.API,funcionario);
  }

  public editarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(this.API,funcionario);
  }

  public desativarFuncionarioPorId(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.API}/${id}`)
  }

}
