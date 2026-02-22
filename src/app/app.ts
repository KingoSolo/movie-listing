import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { AuthServices } from './services/auth-services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('entertainment-view');
  
  authenticator = inject(AuthServices)

  isLoggedIn2(){
    return this.authenticator.loggedIn()
  }
}
