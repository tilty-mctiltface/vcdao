import { Component, OnInit } from '@angular/core';
import {data} from "./mock-data";
import * as shape from 'd3-shape';

@Component({
  selector: 'investment-chart',
  templateUrl: './investment-chart.component.html',
  styleUrls: ['./investment-chart.component.scss']
})
export class InvestmentChartComponent implements OnInit {
  chartData: any[] = []
  view: [number, number] = [700, 300];

  // options
  curve = shape.curveCatmullRom
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

  constructor() { }

  ngOnInit(): void {
    this.chartData = data
  }

}
