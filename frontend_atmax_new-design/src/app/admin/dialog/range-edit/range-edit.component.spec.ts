import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeEditComponent } from './range-edit.component';

describe('RangeEditComponent', () => {
  let component: RangeEditComponent;
  let fixture: ComponentFixture<RangeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
