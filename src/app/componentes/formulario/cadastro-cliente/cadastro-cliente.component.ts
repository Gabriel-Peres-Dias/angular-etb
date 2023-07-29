import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { MessageService } from 'primeng/api';
import { RespostaErro } from 'src/app/model/respostaErro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css'],
  providers: [MessageService]
})
export class CadastroClienteComponent  implements OnInit{

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

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.formularioCliente = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      // dataNascimento: [null, [Validators.required]],
      endereco: this.formularioEndereco
    });
  }

  public salvar(): void {
    if (!!this.formularioCliente.valid) {
      this.clienteService.cadastrarCliente(this.formularioCliente.value).subscribe(() => {
        this.messageService.add({severity:'success', summary:'Salvo com sucesso', detail:'Cadastro salvo com sucesso'});
        setTimeout(() => {
          this.router.navigate(['listar-clientes']);
        }, 1000);
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
