import { TestBed } from '@angular/core/testing';

import { SelectedArmourService } from '../selected-armour.service';

describe('SelectedArmourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedArmourService = TestBed.get(SelectedArmourService);
    expect(service).toBeTruthy();
  });
});
