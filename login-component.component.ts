import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from '../model/user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  loginForm!: FormGroup;
  constructor(){}

  ngOnInit(){
    this.loginForm=new FormGroup({
       userName: new FormControl('',[Validators.required, Validators.email]),//('' .[Validators.required,Validators.email]),
       password:new FormControl('',[Validators.required, Validators.minLength(5)])//('' .[Validators.required,Validators.minLength(5)])  
    });
  }
  loginMethod(userobj:user){
    console.log(userobj );
  }

}
