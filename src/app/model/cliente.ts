import { Endereco } from "./endereco";

export interface Cliente {
  id?: number;
  nome?: string;
  email?: string;
  cpf?: string;
  telefone?: string;
  endereco?: Endereco;
}
