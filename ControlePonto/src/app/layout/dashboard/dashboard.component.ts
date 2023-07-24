import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeoLoc } from 'src/modules/GeoLoc.model';
import { RegPonto } from 'src/modules/RegPonto.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource: any;
  dataAgora = new Date().getTime();
  geoLocalization = {latitude: 0, longitude: 0};
  formGroup: FormGroup = new FormGroup('');

  constructor(private store: AngularFirestore) {}
  ngOnInit(): void {
    this.initForm()
    this.getLocalization();
  }
  getLocalization() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.geoLocalization.latitude =  position.coords.latitude;
      this.geoLocalization.longitude = position.coords.longitude;
    })
  }

  initForm() {
    this.formGroup = new FormGroup({
      isIn: new FormControl('', Validators.required),
      justificativa: new FormControl('', Validators.required)
    })
  }

  savePonto() {
    let reg = {
      createdDate: this.dataAgora,
      address: {
        latitude: this.geoLocalization.latitude,
        longitude: this.geoLocalization.longitude
      },
      isIn: this.formGroup.get('isIn')?.value,
      company: this.formGroup.get('justificativa')?.value
    }

    this.store.collection('reg_ponto').doc('rodrigoreis').set(reg);
  }
}
