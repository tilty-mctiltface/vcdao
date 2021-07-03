import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TimeRange } from './time-ranges.enum';



@Component({
  selector: 'percentage-increase',
  templateUrl: './percentage-increase.component.html',
  styleUrls: ['./percentage-increase.component.scss']
})
export class InvestmentPercentageIncreaseComponent implements OnInit, OnChanges {

  @Input() initialValue: number = 0;
  @Input() currentValue: number = 0;

  @Output() timeRangeChanged: EventEmitter<TimeRange> = new EventEmitter<TimeRange>();

  percentage: number = 0;
  TimeRange: typeof TimeRange = TimeRange;

  constructor() { }

  ngOnInit(): void {
    this.percentage = this.calculatePercentage();
  }

  ngOnChanges() {
    this.percentage = this.calculatePercentage();
  }

  dateRangeChanged(timeRange: TimeRange): void {
    this.timeRangeChanged.emit(timeRange);
  }

  private calculatePercentage(): number {
    if (this.initialValue === 0) {
      return 0;
    }
    return (this.currentValue - this.initialValue) / this.initialValue * 100;
  }
}
