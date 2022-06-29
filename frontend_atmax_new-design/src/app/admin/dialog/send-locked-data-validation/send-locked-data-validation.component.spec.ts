import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLockedDataValidationComponent } from './send-locked-data-validation.component';

describe('SendLockedDataValidationComponent', () => {
  let component: SendLockedDataValidationComponent;
  let fixture: ComponentFixture<SendLockedDataValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendLockedDataValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendLockedDataValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
