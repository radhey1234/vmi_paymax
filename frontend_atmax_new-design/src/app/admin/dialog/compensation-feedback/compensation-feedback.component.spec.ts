import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationFeedbackComponent } from './compensation-feedback.component';

describe('CompensationFeedbackComponent', () => {
  let component: CompensationFeedbackComponent;
  let fixture: ComponentFixture<CompensationFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
