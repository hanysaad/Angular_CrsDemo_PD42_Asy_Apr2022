import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const forbidden = nameRe.test(control.value);
//     return forbidden ? {forbiddenName: {value: control.value}} : null;
//   };
// }

   export function forbiddenNameValidator (control: AbstractControl): ValidationErrors | null {
    const forbidden = /(admin)|(user)/i.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };

