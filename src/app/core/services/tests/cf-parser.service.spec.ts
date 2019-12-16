import { TestBed } from '@angular/core/testing';

import { CfParserService } from '../cf-parser.service';

describe('CfParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CfParserService = TestBed.get(CfParserService);
    expect(service).toBeTruthy();
  });
});
