import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAnalyticsTeamMemberComponent } from './manage-analytics-team-member.component';

describe('ManageAnalyticsTeamMemberComponent', () => {
  let component: ManageAnalyticsTeamMemberComponent;
  let fixture: ComponentFixture<ManageAnalyticsTeamMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAnalyticsTeamMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAnalyticsTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
