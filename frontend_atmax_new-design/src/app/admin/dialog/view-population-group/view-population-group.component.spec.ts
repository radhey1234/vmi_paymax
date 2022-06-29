import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPopulationGroupComponent } from './view-population-group.component';

describe('ViewPopulationGroupComponent', () => {
  let component: ViewPopulationGroupComponent;
  let fixture: ComponentFixture<ViewPopulationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPopulationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPopulationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
