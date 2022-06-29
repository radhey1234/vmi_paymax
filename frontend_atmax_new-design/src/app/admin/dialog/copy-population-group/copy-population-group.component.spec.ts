import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyPopulationGroupComponent } from './copy-population-group.component';

describe('CopyPopulationGroupComponent', () => {
  let component: CopyPopulationGroupComponent;
  let fixture: ComponentFixture<CopyPopulationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyPopulationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyPopulationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
