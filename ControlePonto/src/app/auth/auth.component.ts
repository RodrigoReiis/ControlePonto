import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { AngularFirestore } from '@angular/fire/compat/firestore'



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  formGroup: FormGroup = new FormGroup('');
  dataSource: any;

  constructor(private db: AngularFireDatabase, private store: AngularFirestore) {}

  ngOnInit(): void {
    this.initForm();
    this.store.collection('users').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item =>
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      );
      console.log(this.dataSource, 'datasorce')
    })

  }

  initForm() {
    this.formGroup = new FormGroup({
      login: new FormControl(''),
      senha: new FormControl(''),
      token: new FormControl(''),
    })
  }
}
