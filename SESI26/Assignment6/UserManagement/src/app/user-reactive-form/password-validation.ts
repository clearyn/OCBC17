import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const passwordValidation: ValidatorFn = (abstractControl: AbstractControl): any => {
  const password = abstractControl.get('password');
  const confirmPassword = abstractControl.get('confirmPassword');

  if (password?.value !== confirmPassword?.value) {
    return { isDifferent: true }
  }else{
      return null;
  }
  
};