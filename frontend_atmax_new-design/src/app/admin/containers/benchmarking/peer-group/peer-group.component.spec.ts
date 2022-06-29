import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerGroupComponent } from './peer-group.component';

describe('PeerGroupComponent', () => {
  let component: PeerGroupComponent;
  let fixture: ComponentFixture<PeerGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
