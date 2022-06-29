import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterGenerationComponent } from './letter-generation.component';

describe('LetterGenerationComponent', () => {
  let component: LetterGenerationComponent;
  let fixture: ComponentFixture<LetterGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
