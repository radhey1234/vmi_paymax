import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessGridSettingLoadSelectComponent } from './process-grid-setting-load-select.component';

describe('ProcessGridSettingLoadSelectComponent', () => {
  let component: ProcessGridSettingLoadSelectComponent;
  let fixture: ComponentFixture<ProcessGridSettingLoadSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessGridSettingLoadSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessGridSettingLoadSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
