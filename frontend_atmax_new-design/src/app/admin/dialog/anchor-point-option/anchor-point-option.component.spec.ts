import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorPointOptionComponent } from './anchor-point-option.component';

describe('AnchorPointOptionComponent', () => {
  let component: AnchorPointOptionComponent;
  let fixture: ComponentFixture<AnchorPointOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorPointOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorPointOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
