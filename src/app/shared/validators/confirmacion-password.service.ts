import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacionPasswordService {

  constructor() { }

  public validacionConfirmacionPassword = (passwordControl: AbstractControl): ValidatorFn => {
    return (confirmacionControl: AbstractControl) : { [key: string]: boolean } | null => {
      const confirmValue = confirmacionControl.value;
      const passwordValue = passwordControl.value;
      if (confirmValue === '') {
          return;
      }
      if (confirmValue !== passwordValue) {
          return  { mustMatch: true }
      } 
      return null;
    };
  }

}
