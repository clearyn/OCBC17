import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const passwordValidation: ValidatorFn = (abstractControl: AbstractControl): ValidationErrors | null => {
  const password = abstractControl.get('password');
  const confirmPassword = abstractControl.get('confirmPassword');

  return password === confirmPassword ? null : { notSame: true }
};
