import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentValueComponent } from './investment-value.component';

describe('InvestmentValueComponent', () => {
  let component: InvestmentValueComponent;
  let fixture: ComponentFixture<InvestmentValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
