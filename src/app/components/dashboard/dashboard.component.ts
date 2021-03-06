import {Component, OnInit} from '@angular/core';
import {data} from './mock-data'
import {MatDialog} from "@angular/material/dialog";
import {PoolDialogComponent} from "../shared/dialogs/pool/pool-dialog.component";
import {last} from "rxjs/operators";

@Component({
  selector: 'app-statistics',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pool_data = data.pools
  displayedColumns = ['name', 'value', 'tvl', 'past24', 'mcap', 'predicted_earnings']
  multi: any[] = data.your_investment
  valueView: [number, number] = [900, 400];
  numCardView: [number, number] = [400, 200]
  numCardData = data.cards
  cardColor: string = '#2d5660';

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
  };

  openDialog(pool: any): void {
    console.log(pool)
    const dialogRef = this.dialog.open(PoolDialogComponent, {
      width: 'auto',
      data: pool
    })
  }

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
}
