import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanListComponent } from './edit-plan-list.component';

describe('EditPlanListComponent', () => {
  let component: EditPlanListComponent;
  let fixture: ComponentFixture<EditPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
