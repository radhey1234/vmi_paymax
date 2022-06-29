import { TestBed } from '@angular/core/testing';

import { FormulaSettingService } from './formula-setting.service';

describe('FormulaSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormulaSettingService = TestBed.get(FormulaSettingService);
    expect(service).toBeTruthy();
  });
});
