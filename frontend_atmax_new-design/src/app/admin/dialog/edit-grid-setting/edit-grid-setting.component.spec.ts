import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGridSettingComponent } from './edit-grid-setting.component';

describe('EditGridSettingComponent', () => {
  let component: EditGridSettingComponent;
  let fixture: ComponentFixture<EditGridSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGridSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGridSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
