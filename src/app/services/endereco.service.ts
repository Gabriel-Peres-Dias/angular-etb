import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EnderecoResponse } from '../model/endereco-response';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private readonly API = `${environment.API}/endereco`;

  constructor(private http: HttpClient) { }

  getEnderecoPorCep(cep: string): Observable<EnderecoResponse> {
    return this.http.get<EnderecoResponse>(`${this.API}/cep/${cep}`);
  }
}
