import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvocableListComponent } from './evocable-list.component';

describe('EvocableListComponent', () => {
  let component: EvocableListComponent;
  let fixture: ComponentFixture<EvocableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvocableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvocableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
