import {Component, OnInit} from '@angular/core';
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  barView: [number, number] = [460, 100];
  barSingle: any[] = [
    {
      name: 'TVL',
      value: 180987876.23
    },
    {
      name: 'Current reward cycle',
      value: 60987876.23
    }
  ];
  gaugeView: [number, number] = [600 * 0.75, 400 * 0.75];
  gaugeSingle: any[] = [
    {
      name: 'Current token supply',
      value: 83000
    },
    {
      name: 'Not minted',
      value: 100000 - 83000
    },
  ];
  legendPosition: LegendPosition = LegendPosition.Below;
  // options
  barShowXAxis: boolean = true;
  barShowYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;

  colorScheme = {
    domain: ['#1ce700', 'rgb(28,28,28)']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
