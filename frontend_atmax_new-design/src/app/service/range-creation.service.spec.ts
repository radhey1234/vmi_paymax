import { TestBed } from '@angular/core/testing';

import { RangeCreationService } from './range-creation.service';

describe('RangeCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RangeCreationService = TestBed.get(RangeCreationService);
    expect(service).toBeTruthy();
  });
});
