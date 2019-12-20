import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteCharacterComponent } from './paste-character.component';

describe('PasteCharacterComponent', () => {
  let component: PasteCharacterComponent;
  let fixture: ComponentFixture<PasteCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
