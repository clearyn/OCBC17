import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserForm } from '../Models/user';
import { passwordValidation } from './password-validation';
import { UserService } from '../Services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit  {
  
  formTitle = '';

  roles  = [
    {name: 'Admin', value: 'Admin'},
    {name: 'User', value: 'User'}
  ]

  dataEdit: any;
  
  form: {
    userFormGroup: FormGroup;
    isSubmitted: boolean;
    editMode:boolean;
    errors: any;
  } = {
    userFormGroup: new FormGroup({
      Title: new FormControl('',[Validators.required,Validators.minLength(5)] ),
      FirstName: new FormControl('',[Validators.required,Validators.minLength(5)] ),
      LastName: new FormControl('',[Validators.required, Validators.minLength(5)] ),
      Role: new FormControl('',[Validators.required] ),
      Email: new FormControl('',[Validators.required,Validators.email] ),
      Password: new FormControl('',[Validators.required,Validators.minLength(6)] ),
      ConfirmPassword: new FormControl(''),
    }, {validators: passwordValidation}),
    isSubmitted: false,
    editMode:false,
    errors: {}
  }

  constructor(private userService: UserService,
     private dialogReactive: MatDialogRef<UserReactiveFormComponent>,
     @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if (this.data.isEdit == true && this.data.id != undefined){
      this.form.editMode = true;
      this.formTitle = 'Edit User';
      this.userService.getUserById(this.data.id).subscribe(res => {
        this.dataEdit = res;
        this.form.userFormGroup.patchValue({
          Title: this.dataEdit.title,
          FirstName: this.dataEdit.firstName,
          LastName: this.dataEdit.lastName,
          Role: this.dataEdit.role,
          Email: this.dataEdit.email,
        });
      });
    }else{
      this.formTitle = 'Add User';
    }
      
  }

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

  get validators(){
    return this.form.userFormGroup.get('validators');
  };


  //Push error & Delete error from array object in form
  validateForm () {
    if(this.title?.errors)
      this.form.errors.title = { ...this.title?.errors }
    else
      delete this.form.errors.title
    if(this.firstName?.errors)
      this.form.errors.firstName = { ...this.firstName?.errors }
    else
      delete this.form.errors.firstName
    if(this.lastName?.errors)
      this.form.errors.lastName = { ...this.lastName?.errors }
    else
      delete this.form.errors.lastName
    if(this.role?.errors)
      this.form.errors.role = { ...this.role?.errors }
    else
      delete this.form.errors.role
    if(this.email?.errors)
      this.form.errors.email = { ...this.email?.errors }
    else
      delete this.form.errors.email
    if(this.password?.errors)
      this.form.errors.password = { ...this.password?.errors }
    else
      delete this.form.errors.password
    if(this.confirmPassword?.errors)
      this.form.errors.confirmPassword = { ...this.confirmPassword?.errors }
    else
      delete this.form.errors.confirmPassword
  };

  //Handle event submit form
  onSubmit(){
    this.switchSubmittedState(true);
    this.validateForm();
    if (Object.keys(this.form.errors).length === 0){
      const userForm: UserForm = {
        Title: this.form.userFormGroup.value.Title,
        FirstName: this.form.userFormGroup.value.FirstName,
        LastName: this.form.userFormGroup.value.LastName,
        Role: this.form.userFormGroup.value.Role,
        Email: this.form.userFormGroup.value.Email,
        Password: this.form.userFormGroup.value.Password,
        ConfirmPassword: this.form.userFormGroup.value.ConfirmPassword,
      };
      if (this.form.editMode == true) {
        this.userService.putUserById(this.data.id, userForm).subscribe(
          (res) => {
            if (res.message) {
              alert(res.message);
              this.form.userFormGroup.reset();
              this.dialogReactive.close([]);
            }
          },
          (err) => {
              alert(err);
          },
        );
      }else{
        this.userService.postUser(userForm).subscribe(
          (res) => {
            if (res.message) {
              alert(res.message);
              this.form.userFormGroup.reset();
              this.dialogReactive.close([]);
            }
          },
          (err) => {
              alert(err);
          },
        );
      }
      
    }
  };

  //Change submitted form state
  switchSubmittedState (state: boolean) {
    this.form.isSubmitted = state;
  }; 

  
}