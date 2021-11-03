import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentDetailForm } from 'src/app/models/paymentdetail';
import { PaymentdetailService } from 'src/app/services/paymentdetail.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  formTitle = '';

  dataEdit: any;

  patternNumber = /^-?(0|[1-9]\d*)?$/;

  form: {
    userFormGroup: FormGroup;
    isSubmitted: boolean;
    editMode: boolean;
    errors: any;
  } = {
      userFormGroup: new FormGroup({
        cardOwnerName: new FormControl('', [Validators.required]),
        cardNumber: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern(this.patternNumber)]),
        expirationDate: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/[\d]{2}\/[\d]{4}/)]),
        securityCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(this.patternNumber)]),
      }),
      isSubmitted: false,
      editMode: false,
      errors: {}
    };

  constructor(
    private paymentService: PaymentdetailService
  ) { };

  ngOnInit(): void {
    this.formTitle = 'Payment Detail Register';
  };

  //Getter for form spesific value
  get cardOwnerName() {
    return this.form.userFormGroup.get('cardOwnerName');
  };

  get cardNumber() {
    return this.form.userFormGroup.get('cardNumber');
  };

  get expirationDate() {
    return this.form.userFormGroup.get('expirationDate');
  };

  get securityCode() {
    return this.form.userFormGroup.get('securityCode');
  };

  //Push error & Delete error from array object in form
  validateForm() {
    if (this.cardOwnerName?.errors)
      this.form.errors.cardOwnerName = { ...this.cardOwnerName?.errors }
    else
      delete this.form.errors.cardOwnerName
    if (this.cardNumber?.errors)
      this.form.errors.cardNumber = { ...this.cardNumber?.errors }
    else
      delete this.form.errors.cardNumber
    if (this.expirationDate?.errors)
      this.form.errors.expirationDate = { ...this.expirationDate?.errors }
    else
      delete this.form.errors.expirationDate
    if (this.securityCode?.errors)
      this.form.errors.securityCode = { ...this.securityCode?.errors }
    else
      delete this.form.errors.securityCode
  };

  //Handle event submit form
  onSubmit() {
    console.log(this.form.errors);
    this.switchSubmittedState(true);
    this.validateForm();
    if (Object.keys(this.form.errors).length === 0) {
      const paymentForm: PaymentDetailForm = {
        cardOwnerName: this.form.userFormGroup.value.cardOwnerName,
        cardNumber: this.form.userFormGroup.value.cardNumber,
        expirationDate: this.form.userFormGroup.value.expirationDate,
        securityCode: this.form.userFormGroup.value.securityCode,
      };
      this.paymentService.postPaymentDetail(paymentForm).subscribe(
        (res) => {
          if (res.message) {
            alert(res.message);
            this.form.userFormGroup.reset();
          }
        },
        (err) => {
          alert(err);
        },
      );
    }
  };

  //Change submitted form state
  switchSubmittedState(state: boolean) {
    this.form.isSubmitted = state;
  };

}
