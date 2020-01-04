import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArmourComponent } from './select-armour.component';

describe('SelectArmourComponent', () => {
  let component: SelectArmourComponent;
  let fixture: ComponentFixture<SelectArmourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArmourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
