import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      email: new FormControl(''),
      senha: new FormControl('')
    });
  }
}
