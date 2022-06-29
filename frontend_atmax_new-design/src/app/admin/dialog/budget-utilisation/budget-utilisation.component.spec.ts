import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetUtilisationComponent } from './budget-utilisation.component';

describe('BudgetUtilisationComponent', () => {
  let component: BudgetUtilisationComponent;
  let fixture: ComponentFixture<BudgetUtilisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetUtilisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
