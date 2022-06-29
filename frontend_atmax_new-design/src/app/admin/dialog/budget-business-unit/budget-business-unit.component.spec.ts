import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetBusinessUnitComponent } from './budget-business-unit.component';

describe('BudgetBusinessUnitComponent', () => {
  let component: BudgetBusinessUnitComponent;
  let fixture: ComponentFixture<BudgetBusinessUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetBusinessUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetBusinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
