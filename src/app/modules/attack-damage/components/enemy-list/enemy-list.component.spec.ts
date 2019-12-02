import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyListComponent } from './enemy-list.component';

describe('EnemyListComponent', () => {
  let component: EnemyListComponent;
  let fixture: ComponentFixture<EnemyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
