import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RegisterModule } from './register.module';
import { By } from '@angular/platform-browser';


describe(RegisterComponent.name, () => {
  let fixture: ComponentFixture<RegisterComponent>;
  let component: RegisterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should register button is disabled when data is invalid', () => {
    component.formGroup.controls['email'].setValue(null);
    component.formGroup.controls['senha'].setValue(null);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.disabled).toBeTruthy();
  })

  it('Should register button is enabled when data is valid', () => {
    component.formGroup.controls['email'].setValue('teste@teste.com.br');
    component.formGroup.controls['senha'].setValue('senha123456789');
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button')
    expect(button.disabled).toBeFalsy();
  })

  it('Should function validaSenhaPreenchida when data is Rodrigo set button disabled'), () => {
    component.formGroup.controls['senha'].setValue('Rodrigo');
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button')
    expect(button.disabled).toBeTruthy();
  }
});
