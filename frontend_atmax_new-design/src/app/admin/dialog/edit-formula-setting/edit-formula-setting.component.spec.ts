import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormulaSettingComponent } from './edit-formula-setting.component';

describe('EditFormulaSettingComponent', () => {
  let component: EditFormulaSettingComponent;
  let fixture: ComponentFixture<EditFormulaSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormulaSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormulaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
