import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinRatioComponent } from './coin-ratio.component';

describe('CoinRatioComponent', () => {
  let component: CoinRatioComponent;
  let fixture: ComponentFixture<CoinRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinRatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
