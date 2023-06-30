import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = `${environment.API}/cliente`;

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente);
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }
}
