import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EnderecoResponse } from 'src/app/model/endereco-response';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css'],
  providers: [MessageService]
})
export class CadastroEnderecoComponent {

@Input() formularioEndereco!: FormGroup;

carregando: boolean = false;

constructor(private endrecoService: EnderecoService, private messageService: MessageService) {}

public buscarEnderecoPorCep() {
  if(!!this.cep && this.cep?.length == 8) {
    this.carregando = true;
    this.endrecoService.getEnderecoPorCep(this.cep).subscribe
    ((endereco:EnderecoResponse) => {
      this.preencherEndereco(endereco);
      this.carregando = false;
    }), (error: any) => {
      this.messageService.add({severity:'error', summary:'Erro ao buscar CEP', detail: error.mensagem});
    }
  }
}

preencherEndereco(endereco: EnderecoResponse): void {
  this.formularioEndereco.get('bairro')?.setValue(endereco.bairro);
  this.formularioEndereco.get('uf')?.setValue(endereco.uf);
  this.formularioEndereco.get('cidade')?.setValue(endereco.localidade);
  this.formularioEndereco.get('logradouro')?.setValue(endereco.logradouro);
}

get cep() {
  return this.formularioEndereco.get('cep')?.value;
}

}
