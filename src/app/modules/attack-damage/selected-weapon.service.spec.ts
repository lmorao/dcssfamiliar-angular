import { TestBed } from '@angular/core/testing';

import { SelectedWeaponService } from './selected-weapon.service';

describe('SelectedWeaponService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedWeaponService = TestBed.get(SelectedWeaponService);
    expect(service).toBeTruthy();
  });
});
