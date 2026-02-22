import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServices } from '../../services/auth-services';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators, ReactiveFormsModule  } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

    Authentication = inject(AuthServices)

    loginForm = new FormGroup({
        email : new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })

    onSubmit(){
        const email = this.loginForm.value.email as string
        if(this.loginForm.valid){
       this.Authentication.login(email)
       
        }
    }
}
