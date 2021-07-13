import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {data} from "./mock-data";
import * as shape from 'd3-shape';
import {interval, Observable} from "rxjs";
import {CoingeckoService} from "../../../services/coingecko/coingecko.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'investment-chart',
  templateUrl: './investment-chart.component.html',
  styleUrls: ['./investment-chart.component.scss']
})
export class InvestmentChartComponent implements OnInit {
  chartData: any[] = []
  view: [number, number] = [700, 300];
  // options
  curve = shape.curveNatural
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  yAxis: boolean = true;
  xAxis: boolean = false;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#6CC86B']
  }

  formatUnix(val: number) {
    console.log(val)
    return new Date(val).toLocaleDateString('en-US')
  }

  constructor(private coinGecko: CoingeckoService, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.chartData = data
    this.getInterval().subscribe(
      () => {
        this.chartData[0].series = [
          ... this.chartData[0].series,
          ...[{
            value: Math.random() * (45000 - 30000 + 1) + 30000,
            name: Math.floor(new Date().getTime())
          }]
        ]
        if (this.chartData[0].series.length > 100) {
          console.log(this.chartData[0].series.length)
          this.chartData[0].series.shift()
        }
        this.chartData = [... this.chartData]
      }
    )
  }

  getInterval(): Observable<number> {
    return interval(5000)
  }

}
