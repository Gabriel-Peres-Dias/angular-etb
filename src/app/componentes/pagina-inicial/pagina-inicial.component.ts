import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { RecuperarLoginService } from 'src/app/services/recuperar-login.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
  providers: [MessageService]
})
export class PaginaInicialComponent implements OnInit{

  formularioLogin!: FormGroup;
  MENSAGEM_ERRO_LOGIN: string = "E-mail ou senha estão errados!";

  constructor(
    private funcionarioService: FuncionarioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private recuperarLoginService: RecuperarLoginService) {}

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    })
  }

  public login() {
    if(this.formularioLogin.valid) {
      this.funcionarioService.logarFuncionario(this.formularioLogin.value).subscribe((response: Funcionario) => {
        if (!!response) {
          this.router.navigate(['listar-funcionarios']);
          this.recuperarLoginService.setarDados(response);
        } else {
          this.messageService.add({severity:'warn', summary:'Erro ao realizar login', detail: this.MENSAGEM_ERRO_LOGIN});
        }
      })
    }
  }

}
