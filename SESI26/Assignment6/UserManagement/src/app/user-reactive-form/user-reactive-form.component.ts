import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserForm } from '../Models/user';
import { passwordValidation } from './password-validation';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent  {
  
  form: {
    userFormGroup: FormGroup;
    isSubmitted: boolean;
    errors: any;
  } = {
    userFormGroup: new FormGroup({
      Title: new FormControl('',[Validators.required,Validators.minLength(5)] ),
      FirstName: new FormControl('',[Validators.required,Validators.minLength(5)] ),
      LastName: new FormControl('',[Validators.required, Validators.minLength(5)] ),
      Role: new FormControl('',[Validators.required,Validators.minLength(5)] ),
      Email: new FormControl('',[Validators.required,Validators.email] ),
      Password: new FormControl('',[Validators.required,Validators.minLength(6)] ),
      ConfirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)] ),
    }, {validators: passwordValidation}),
    isSubmitted: false,
    errors: {}
  }

  constructor(private userService: UserService) { }

  //Getter for form spesific value
  get title(){
    return this.form.userFormGroup.get('Title');
  };

  get firstName(){
    return this.form.userFormGroup.get('FirstName');
  };

  get lastName(){
    return this.form.userFormGroup.get('LastName');
  };

  get role(){
    return this.form.userFormGroup.get('Role');
  };

  get email(){
    return this.form.userFormGroup.get('Email');
  };

  get password(){
    return this.form.userFormGroup.get('Password');
  };

  get confirmPassword(){
    return this.form.userFormGroup.get('ConfirmPassword');
  };

  //Push error & Delete error from array object in form
  validateForm () {
    if(this.title?.errors)
      this.form.errors.todoNewItems = { ...this.title?.errors }
    else
      delete this.form.errors.todoNewItems
  };

  //Handle event submit form
  onSubmit(){
    this.switchSubmittedState(true);
    this.validateForm();
    if (Object.keys(this.form.errors).length === 0){
      const userForm: UserForm = {
        title: this.form.userFormGroup.value.title,
        firstName: this.form.userFormGroup.value.firstName,
        lastName: this.form.userFormGroup.value.lastName,
        role: this.form.userFormGroup.value.role,
        email: this.form.userFormGroup.value.email,
        password: this.form.userFormGroup.value.password,
        confirmPassword: this.form.userFormGroup.value.confirmPassword,
      };
      this.userService.postUser(userForm);
      this.form.userFormGroup.reset();
    }
  };

  postUser(userForm: UserForm){
    this.userService.postUser(userForm).subscribe(
      (res) => {
        if (res.message) {
          alert(res.message);
        }
      },
      (err) => {
          alert(err);
      },
    );
    
  };

  //Change submitted form state
  switchSubmittedState (state: boolean) {
    this.form.isSubmitted = state;
  }; 

  
}