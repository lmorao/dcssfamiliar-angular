import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDamageComponent } from './spell-damage.component';

describe('SpellDamageComponent', () => {
  let component: SpellDamageComponent;
  let fixture: ComponentFixture<SpellDamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellDamageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
