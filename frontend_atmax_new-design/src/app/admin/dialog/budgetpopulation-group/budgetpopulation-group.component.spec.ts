import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetpopulationGroupComponent } from './budgetpopulation-group.component';

describe('BudgetpopulationGroupComponent', () => {
  let component: BudgetpopulationGroupComponent;
  let fixture: ComponentFixture<BudgetpopulationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetpopulationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetpopulationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
