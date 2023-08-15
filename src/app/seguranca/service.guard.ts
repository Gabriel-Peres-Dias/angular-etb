import { CanActivateFn, Router } from '@angular/router';
import { RecuperarLoginService } from '../services/recuperar-login.service';
import { inject } from '@angular/core';

export const autenticadorDeRota: CanActivateFn = (route, state) => {
  const recuperarLoginService = inject(RecuperarLoginService);
  const router = inject(Router);
  const acesso = recuperarLoginService.podeAcessar();
  if (!!acesso) {
    return true;
  }
  alert('Usuário não autenticado!');
  return router.createUrlTree(['pagina-inicial']);
};
