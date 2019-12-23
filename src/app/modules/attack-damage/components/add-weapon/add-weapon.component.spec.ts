import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeaponComponent } from './add-weapon.component';

describe('AddWeaponComponent', () => {
  let component: AddWeaponComponent;
  let fixture: ComponentFixture<AddWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
