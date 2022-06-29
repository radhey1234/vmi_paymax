import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenchMarkingMarketDataComponent } from './edit-bench-marking-market-data.component';

describe('EditBenchMarkingMarketDataComponent', () => {
  let component: EditBenchMarkingMarketDataComponent;
  let fixture: ComponentFixture<EditBenchMarkingMarketDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBenchMarkingMarketDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenchMarkingMarketDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
