import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusFeedbackComponent } from './bonus-feedback.component';

describe('BonusFeedbackComponent', () => {
  let component: BonusFeedbackComponent;
  let fixture: ComponentFixture<BonusFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
