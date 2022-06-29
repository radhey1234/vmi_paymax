import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeEligibilityListComponent } from './edit-employee-eligibility-list.component';

describe('EditEmployeeEligibilityListComponent', () => {
  let component: EditEmployeeEligibilityListComponent;
  let fixture: ComponentFixture<EditEmployeeEligibilityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeEligibilityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeEligibilityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
