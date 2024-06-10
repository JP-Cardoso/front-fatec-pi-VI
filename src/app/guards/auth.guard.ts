import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const naoAutenticado = () => {
    localStorage.clear();
    router.navigateByUrl('/');
    return false;
  }

  const token = localStorage.getItem('token');

  if (!token) {
    return naoAutenticado();
  }

  return true;
};
