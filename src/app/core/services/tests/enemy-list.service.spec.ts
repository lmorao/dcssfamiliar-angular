import { TestBed } from '@angular/core/testing';

import { EnemyListService } from '../enemy-list.service';

describe('EnemyListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnemyListService = TestBed.get(EnemyListService);
    expect(service).toBeTruthy();
  });
});
