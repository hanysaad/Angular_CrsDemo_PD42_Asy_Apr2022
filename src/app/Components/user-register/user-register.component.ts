import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/Custom Validators/PasswordmatchValidator';
import { forbiddenNameValidator } from 'src/app/Custom Validators/UserNameValidator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  userRegisterFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userRegisterFormGroup = fb.group({
      // name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/(admin)|(user)/)]],
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email: [''],
      mobileNo: fb.array([fb.control('')]),
      address: fb.group({
        street: [''],
        postalCode: [''],
      }),
      password: [''],
      confirmPassword: [''],
      reachedBy: [''],
      reachedByOther: [''],
    }, { validators: passwordMatchValidator });
    // this.userRegisterFormGroup= new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   email: new FormControl(''),
    //   mobileNo: new FormControl(''),
    //   address: new FormGroup({
    //     street: new FormControl(''),
    //     postalCode: new FormControl('')
    //   }),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    //   reachedBy: new FormControl(''),
    //   reachedByOther: new FormControl('')
    // });
  }

  ngOnInit(): void {
    // Check URL params
    // If no param, then display form empty for registration
    // Else, get UserID from URL, load user data

    // this.userRegisterFormGroup.setValue( // All object properties
    //   { "name": "ITI",
    //   "email": "iti@iti.com",
    //   "mobileNo": "01111111",
    //   "address": { "street": "University", "postalCode": "25" },
    //   "reachedBy": "LinkedIn",
    //   "reachedByOther": "" }
    // );

    // this.userRegisterFormGroup.patchValue( // some object properties
    //   { "name": "ITI",
    //   "email": "iti@iti.com",
    //   "mobileNo": "01111111",
    //   "address": { "street": "University", "postalCode": "25" },
    //   "reachedBy": "LinkedIn",
    //   "reachedByOther": "" }
    // );
  }

  get name() {
    return this.userRegisterFormGroup.controls['name'];
  }

  get mobileNoArr(): FormArray {
    return this.userRegisterFormGroup.controls['mobileNo'] as FormArray;
  }

  get reachedBy() {
    return this.userRegisterFormGroup.controls['reachedBy'];
  }

  get password() {
    return this.userRegisterFormGroup.controls['password'];
  }

  get confirmPassword() {
    return this.userRegisterFormGroup.controls['confirmPassword'];
  }

  addMobile() {
    this.mobileNoArr.push(this.fb.control(''));
  }

  updateReachedOtherValidaiton() {
    if (this.reachedBy.value == "Other")
      this.userRegisterFormGroup.controls['reachedByOther'].setValidators([Validators.required]);
    else
      this.userRegisterFormGroup.controls['reachedByOther'].clearValidators();

    this.userRegisterFormGroup.controls['reachedByOther'].updateValueAndValidity();
  }

  register() {
    // Call API, send this.userRegisterFormGroup.value;
  }

}
