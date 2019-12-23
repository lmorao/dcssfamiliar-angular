import { TestBed } from '@angular/core/testing';

import { WeaponListService } from '../weapon-list.service';

describe('WeaponListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeaponListService = TestBed.get(WeaponListService);
    expect(service).toBeTruthy();
  });
});
