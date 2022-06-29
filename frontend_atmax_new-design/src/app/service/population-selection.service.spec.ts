import { TestBed } from '@angular/core/testing';

import { PopulationExclusionService } from './population-exclusion.service';

describe('PopulationExclusionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopulationExclusionService = TestBed.get(PopulationExclusionService);
    expect(service).toBeTruthy();
  });
});
