import { Component, OnInit } from '@angular/core';
import {LegendPosition} from "@swimlane/ngx-charts";
import {data} from "../mock-data";

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  whales = data.whales
  whaleColumns = ['nr', 'address', 'percentage', 'buyDate']
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
    domain: ['#00FFF6', '#166D4B']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
