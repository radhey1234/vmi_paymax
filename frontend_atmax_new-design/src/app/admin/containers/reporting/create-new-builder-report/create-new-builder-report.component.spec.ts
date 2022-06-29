import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBuilderReportComponent } from './create-new-builder-report.component';

describe('CreateNewBuilderReportComponent', () => {
  let component: CreateNewBuilderReportComponent;
  let fixture: ComponentFixture<CreateNewBuilderReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewBuilderReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBuilderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
