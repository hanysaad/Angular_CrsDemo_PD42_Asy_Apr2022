import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pass = control.get('password');
  const confirmPass = control.get('confirmPassword');

  return (pass && confirmPass && pass.value === confirmPass.value)? null : {passwordMismatch: true};
};
