import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSimulationPopupComponent } from './edit-simulation-popup.component';

describe('EditSimulationPopupComponent', () => {
  let component: EditSimulationPopupComponent;
  let fixture: ComponentFixture<EditSimulationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSimulationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSimulationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
