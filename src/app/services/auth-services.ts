import { inject, Injectable,signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {

  routes = inject(Router)
  isLoggedIn = signal<boolean>(false)

  login(email:string){
    localStorage.setItem("userEmail",email)
    this.isLoggedIn.set(true)
    this.routes.navigate(['/'])

  }
  logout(){
    localStorage.removeItem("userEmail")
    this.isLoggedIn.set(false)
    this.routes.navigate(['/login'])
  }

  loggedIn(){
    return localStorage.getItem("userEmail")
  }
}
