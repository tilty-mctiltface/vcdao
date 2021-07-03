import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coin-ratio',
  templateUrl: './coin-ratio.component.html',
  styleUrls: ['./coin-ratio.component.scss']
})
export class CoinRatioComponent implements OnInit {

  coinValue: number = 1_200_000;
  ustValue: number = 6_500_000;

  constructor() { }

  ngOnInit(): void {
  }

}
