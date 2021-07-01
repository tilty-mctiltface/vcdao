import { Component, OnInit } from '@angular/core';
import { TimeRange } from '../shared/investment-percentage-increase/time-ranges.enum';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  initialValue: number = 10;
  currentValue: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  changeTimeRange(timerange: TimeRange) {
    switch (timerange) {
      case TimeRange.ONE_DAY:
        this.initialValue = 1;
        this.currentValue = 2;
        return;
      case TimeRange.ONE_WEEK:
        this.initialValue = 0;
        this.currentValue = 0;
        return;
      case TimeRange.ONE_MONTH:
        this.initialValue = 150;
        this.currentValue = 131.31;
        return;
      case TimeRange.ONE_YEAR:
        this.initialValue = 2;
        this.currentValue = 1;
        return;
      default:
        return;
    }
  }
}
