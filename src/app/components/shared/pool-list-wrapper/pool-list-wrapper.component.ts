import { Component, OnInit } from '@angular/core';
import { pools } from '../pool-list/mock-data';

export interface Pool {
  icon: string;
  title: string;
  value: number;
  tvl: number;
  past24h: number;
  mcap: number;
  predicted_apr: APRs;
}

export interface APRs {
  daily: number;
  monthly: number;
  yearly: number;
}

@Component({
  selector: 'pool-list-wrapper',
  templateUrl: './pool-list-wrapper.component.html',
  styleUrls: ['./pool-list-wrapper.component.scss']
})
export class PoolListWrapperComponent implements OnInit {

  pools: Pool[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pools = pools;
  }

}
