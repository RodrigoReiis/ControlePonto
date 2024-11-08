import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  formGroup: FormGroup = new FormGroup('');
  dataSource: any;

  constructor() {}

  ngOnInit(): void {
    this.initForm();

  }

  initForm() {
    this.formGroup = new FormGroup({
      login: new FormControl(''),
      senha: new FormControl(''),
    })
  }
}
