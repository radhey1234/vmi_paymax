import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopulationGroupComponent } from './edit-population-group.component';

describe('EditPopulationGroupComponent', () => {
  let component: EditPopulationGroupComponent;
  let fixture: ComponentFixture<EditPopulationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPopulationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPopulationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
