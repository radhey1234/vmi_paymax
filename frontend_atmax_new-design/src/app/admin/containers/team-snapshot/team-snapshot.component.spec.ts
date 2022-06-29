import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSnapshotComponent } from './team-snapshot.component';

describe('TeamSnapshotComponent', () => {
  let component: TeamSnapshotComponent;
  let fixture: ComponentFixture<TeamSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
