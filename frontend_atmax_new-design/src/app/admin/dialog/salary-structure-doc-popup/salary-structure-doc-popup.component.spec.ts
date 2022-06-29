import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryStructureDocPopupComponent } from './salary-structure-doc-popup.component';

describe('SalaryStructureDocPopupComponent', () => {
  let component: SalaryStructureDocPopupComponent;
  let fixture: ComponentFixture<SalaryStructureDocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryStructureDocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryStructureDocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
