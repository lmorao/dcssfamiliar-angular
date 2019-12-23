import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandUrlComponent } from './land-url.component';

describe('LandUrlComponent', () => {
  let component: LandUrlComponent;
  let fixture: ComponentFixture<LandUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
