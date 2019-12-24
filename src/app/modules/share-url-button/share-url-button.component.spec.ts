import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareUrlButtonComponent } from './share-url-button.component';

describe('ShareUrlButtonComponent', () => {
  let component: ShareUrlButtonComponent;
  let fixture: ComponentFixture<ShareUrlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareUrlButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareUrlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
