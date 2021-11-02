import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function passwordValidation(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
   
    const password = control.get('Password');
    const confirmPassword = control.get('ConfirmPassword');
      return password === confirmPassword ? null : { notSame: true }
  }
}
