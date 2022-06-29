import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPeerGroupListComponent } from './team-peer-group-list.component';

describe('TeamPeerGroupListComponent', () => {
  let component: TeamPeerGroupListComponent;
  let fixture: ComponentFixture<TeamPeerGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPeerGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPeerGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
