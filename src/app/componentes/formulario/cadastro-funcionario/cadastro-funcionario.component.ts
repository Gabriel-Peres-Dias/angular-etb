import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RespostaErro } from 'src/app/model/respostaErro';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css'],
  providers: [MessageService]
})
export class CadastroFuncionarioComponent {

  formularioFuncionario! : FormGroup;
  formularioEndereco: FormGroup = this.formBuilder.group({
    logradouro: [null, [Validators.required]],
    bairro: [null, [Validators.required]],
    cep: [null, [Validators.required]],
    numero: [null, [Validators.required]],
    uf: [null, [Validators.required]],
    cidade: [null, [Validators.required]],
    complemento: [null]
  });

  constructor(private formBuilder: FormBuilder, private funcionarioService: FuncionarioService, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.formularioFuncionario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, [Validators.required]],
      matricula: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      endereco: this.formularioEndereco
    });
  }

  public salvar(): void {
    if (!!this.formularioFuncionario.valid) {
      this.funcionarioService.cadastrarFuncionario(this.formularioFuncionario.value).subscribe(() => {
        this.messageService.add({severity:'success', summary:'Salvo com sucesso', detail:'Cadastro salvo com sucesso'});
        setTimeout(() => {
          this.router.navigate(['listar-funcionarios']);
        }, 1000);
      }, (error) => {
        const erros: RespostaErro[] = error.error;
        erros.forEach(er => {
          this.messageService.add({severity:'error', summary:'Erro ao salvar', detail: er.mensagem});
        })
      });
    } else {
      this.messageService.add({severity:'warn', summary:'Erro ao salvar', detail: 'Formulário inválido'});
      this.formularioFuncionario.markAllAsTouched();
    }
  }
}
