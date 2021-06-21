import { Component, OnInit } from '@angular/core';
import {data} from './mock-data'
import {MatDialog} from "@angular/material/dialog";
import {PoolDialogComponent} from "../shared/dialogs/pool/pool-dialog.component";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  pool_data = data.pools
  displayedColumns = ['name', 'value', 'tvl', 'past24', 'mcap', 'predicted_earnings']
  multi: any[] = [
    {
    "name": "Your Investment",
    "series": [
      {
        "value": 34745,
        "name": "2016-09-24T02:04:47.875Z"
      },
      {
        "value": 41867,
        "name": "2016-09-20T23:02:59.268Z"
      },
      {
        "value": 37867,
        "name": "2016-09-18T06:37:56.860Z"
      },
      {
        "value": 46867,
        "name": "2016-09-17T08:16:52.353Z"
      },
      {
        "value": 51867,
        "name": "2016-09-17T11:23:06.052Z"
      }
    ]
  },
    {
      "name": "VCS Value",
      "series": [
        {
          "value": 30745,
          "name": "2016-09-24T02:04:47.875Z"
        },
        {
          "value": 45867,
          "name": "2016-09-20T23:02:59.268Z"
        },
        {
          "value": 38867,
          "name": "2016-09-18T06:37:56.860Z"
        },
        {
          "value": 51867,
          "name": "2016-09-17T08:16:52.353Z"
        },
        {
          "value": 55867,
          "name": "2016-09-17T11:23:06.052Z"
        }
      ]
    },]
  view: [number, number] = [900, 400];

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
