import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponDamageComponent } from './weapon-damage.component';

describe('WeaponDamageComponent', () => {
  let component: WeaponDamageComponent;
  let fixture: ComponentFixture<WeaponDamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponDamageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
