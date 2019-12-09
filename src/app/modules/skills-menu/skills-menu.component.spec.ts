import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMenuComponent } from './skills-menu.component';

describe('SkillsMenuComponent', () => {
  let component: SkillsMenuComponent;
  let fixture: ComponentFixture<SkillsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
