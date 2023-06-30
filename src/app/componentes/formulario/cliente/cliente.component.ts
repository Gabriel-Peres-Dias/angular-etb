import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { MessageService } from 'primeng/api';
import { RespostaErro } from 'src/app/model/respostaErro';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [MessageService]
})
export class ClienteComponent  implements OnInit{

  formularioCliente! : FormGroup;
  formularioEndereco: FormGroup = this.formBuilder.group({
    logradouro: [null],
    bairro: [null],
    cep: [null],
    numero: [null],
    uf: [null],
    cidade: [null],
    complemento: [null]
  });

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.formularioCliente = this.formBuilder.group({
      nome: [null],
      email: [null],
      cpf: [null],
      telefone: [null],
      senha: [null],
      dataNascimento: [null],
      endereco: this.formularioEndereco
    });
  }

  public salvar(): void {
    this.clienteService.cadastrarCliente(this.formularioCliente.value).subscribe(() => {
      this.messageService.add({severity:'success', summary:'Salvo com sucesso', detail:'Cadastro salvo com sucesso'});
      this.formularioCliente.reset();
    }, (error) => {
      const erros: RespostaErro[] = error.error;
      erros.forEach(er => {
        this.messageService.add({severity:'error', summary:'Erro ao salvar', detail: er.mensagem});
      })
    });
  }
}
