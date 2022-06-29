import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSimulationComponent } from './load-simulation.component';

describe('LoadSimulationComponent', () => {
  let component: LoadSimulationComponent;
  let fixture: ComponentFixture<LoadSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
