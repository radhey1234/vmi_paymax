import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCorrectInputComponent } from './market-correct-input.component';

describe('MarketCorrectInputComponent', () => {
  let component: MarketCorrectInputComponent;
  let fixture: ComponentFixture<MarketCorrectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketCorrectInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketCorrectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
