import { Component, OnInit } from '@angular/core';
import { data } from "../mock-data";
import { PoolDialogComponent } from "../../shared/dialogs/pool/pool-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { TimeRange } from 'src/app/components/shared/investment-percentage-increase/time-ranges.enum';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  initialInvestmentValue: number = 12_131;
  currentInvestmentValue: number = 25_000;
  investmentValueInPointInTime: number = 10_000;

  investmentValueInPointOfTimeMap: Record<TimeRange, number> = {
    "0": 24_331,
    "1": 22_103,
    "2": 19_145,
    "3": this.initialInvestmentValue,
  };


  pool_data = data.pools
  displayedColumns = ['name', 'value', 'tvl', 'past24', 'mcap', 'predicted_earnings']
  multi: any[] = data.your_investment
  valueView: [number, number] = [900, 400]
  numCardView: [number, number] = [400, 200]
  numCardData = data.cards
  cardColor: string = '#efefef'

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#00FFF6', '#166D4B']
  }

  openDialog(pool: any): void {
    console.log(pool)
    const dialogRef = this.dialog.open(PoolDialogComponent, {
      width: 'auto',
      data: pool
    })
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.investmentValueInPointInTime = this.investmentValueInPointOfTimeMap[TimeRange.ONE_DAY];

    this.getInterval().subscribe(
      () => this.currentInvestmentValue = this.currentInvestmentValue + (Math.random() * 5 * (Math.round(Math.random()) ? 1 : -1))
    )
  }


  changeTimeRange(timeRange: TimeRange): void {
    this.investmentValueInPointInTime = this.investmentValueInPointOfTimeMap[timeRange];
  }

  getInterval(): Observable<number> {
    return interval(3000);
  }
}
