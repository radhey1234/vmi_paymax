import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSalarySubPeerGroupComponent } from './internal-salary-sub-peer-group.component';

describe('InternalSalarySubPeerGroupComponent', () => {
  let component: InternalSalarySubPeerGroupComponent;
  let fixture: ComponentFixture<InternalSalarySubPeerGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalSalarySubPeerGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalSalarySubPeerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
