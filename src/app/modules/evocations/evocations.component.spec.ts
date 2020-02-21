import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvocationsComponent } from './evocations.component';

describe('EvocationsComponent', () => {
  let component: EvocationsComponent;
  let fixture: ComponentFixture<EvocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
