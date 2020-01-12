import { TestBed } from '@angular/core/testing';

import { SpellListService } from '../spell-list.service';

describe('SpellListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellListService = TestBed.get(SpellListService);
    expect(service).toBeTruthy();
  });
});
