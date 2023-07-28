import { Endereco } from "./endereco";

export interface Funcionario {
  id?: number;
  nome?: string;
  email?: string;
  cpf?: string;
  matricula?: string;
  endereco?: Endereco;
}
