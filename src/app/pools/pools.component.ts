import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent implements OnInit {
  pools = [
    {
      name: 'BUSD-USDT',
      image: 'USDT-BUSD.png'
    },
    {
      name: 'ETH-USDT',
      image: 'ETH-BUSD.png'
    },
    {
      name: 'USDC-USDT',
      image: 'USDC-USDT.png'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
