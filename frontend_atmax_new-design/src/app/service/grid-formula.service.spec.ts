import { TestBed } from '@angular/core/testing';

import { GridFormulaService } from './grid-formula.service';

describe('GridFormulaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridFormulaService = TestBed.get(GridFormulaService);
    expect(service).toBeTruthy();
  });
});
