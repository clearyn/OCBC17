import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{
  currentUser:{
    isLogin: boolean;
    username: string;
    password : string;
  } = { isLogin:false, username: '', password: ''};

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)] ),
    password: new FormControl('', [Validators.required, Validators.minLength(5)] )
  });

  isSubmitted = false;

  get username(){
    return this.loginForm.get('username');
  };

  get password(){
    return this.loginForm.get('password');
  };

  onLogin(){
    this.isSubmitted = true;
    if (!this.username?.invalid || !this.password?.invalid) {
      this.currentUser = {
        isLogin: true,
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
    }
  };

  handleIsSubmittedState(){
    if (this.isSubmitted == true)
      this.isSubmitted = false;
  };

}
