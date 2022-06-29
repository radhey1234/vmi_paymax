import { TestBed } from '@angular/core/testing';

import { EmployeeEligibilityExclusionService } from './employee-eligibility-exclusion.service';

describe('EmployeeEligibilityExclusionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeEligibilityExclusionService = TestBed.get(EmployeeEligibilityExclusionService);
    expect(service).toBeTruthy();
  });
});
