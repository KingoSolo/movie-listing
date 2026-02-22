import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {

  const routes = inject(Router)
  const email = localStorage.getItem("userEmail")


  if(email){
    return true
  }else{
    routes.navigate(['/login'])
    return false;
  }
  
};
