import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelistComponent } from './changelist.component';

describe('ChangelistComponent', () => {
  let component: ChangelistComponent;
  let fixture: ComponentFixture<ChangelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
