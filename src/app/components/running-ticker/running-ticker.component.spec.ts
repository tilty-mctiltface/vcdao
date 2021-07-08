import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningTickerComponent } from './running-ticker.component';

describe('RunningTickerComponent', () => {
  let component: RunningTickerComponent;
  let fixture: ComponentFixture<RunningTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningTickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
