import { Component } from '@angular/core';
import { RecuperarLoginService } from 'src/app/services/recuperar-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private recuperarLoginService: RecuperarLoginService) {}

  public deslogar(): void {
    this.recuperarLoginService.deslogar();
  }

  public usuarioLogado(): boolean {
    return this.recuperarLoginService.podeAcessar();
  }

}
