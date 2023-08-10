import { Component } from '@angular/core';
import { RecuperarLoginService } from 'src/app/services/recuperar-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private recuperarLoginService: RecuperarLoginService) {}

  deslogar() {
    this.recuperarLoginService.deslogar();
  }

}
