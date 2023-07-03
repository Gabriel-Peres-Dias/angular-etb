import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    logradouro: [null, [Validators.required]],
    bairro: [null, [Validators.required]],
    cep: [null, [Validators.required]],
    numero: [null, [Validators.required]],
    uf: [null, [Validators.required]],
    cidade: [null, [Validators.required]],
    complemento: [null]
  });

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.formularioCliente = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      endereco: this.formularioEndereco
    });
  }

  public salvar(): void {
    if (!!this.formularioCliente.valid) {
      this.clienteService.cadastrarCliente(this.formularioCliente.value).subscribe(() => {
        this.messageService.add({severity:'success', summary:'Salvo com sucesso', detail:'Cadastro salvo com sucesso'});
        this.formularioCliente.reset();
      }, (error) => {
        const erros: RespostaErro[] = error.error;
        erros.forEach(er => {
          this.messageService.add({severity:'error', summary:'Erro ao salvar', detail: er.mensagem});
        })
      });
    } else {
      this.messageService.add({severity:'warn', summary:'Erro ao salvar', detail: 'Formulário inválido'});
      this.formularioCliente.markAllAsTouched();
    }
  }
}
