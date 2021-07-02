import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPercentageIncreaseComponent } from './percentage-increase.component';

describe('InvestmentPercentageIncreaseComponent', () => {
  let component: InvestmentPercentageIncreaseComponent;
  let fixture: ComponentFixture<InvestmentPercentageIncreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPercentageIncreaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPercentageIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
