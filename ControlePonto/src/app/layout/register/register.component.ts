import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup = new FormGroup('');

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        validaSenhaPreenchida(/Rodrigo/i)
      ])
    });
  }

  register() {
    const email = this.formGroup.get('email')?.value;
    const senha = this.formGroup.get('senha')?.value;
  }
}
function validaSenhaPreenchida(nameRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validator = nameRegex.test(control.value);
    return validator ? { validatorPass: { value: control.value }} : null;
  }
}

