import { Component, Input, OnInit } from '@angular/core';
import { Pool } from '../pool-list-wrapper/pool-list-wrapper.component';
import { pools } from "./mock-data";
import {CoingeckoService} from "../../../services/coingecko/coingecko.service";



@Component({
  selector: 'pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.scss']
})
export class PoolListComponent implements OnInit {

  @Input() pools: Pool[] = [];
  testPools: Pool[] = []
  private tokens = ['bitcoin', 'dogecoin', 'ethereum', 'truefi', 'tether', 'safermoon', 'binancecoin', 'cardano', 'tezos']

  constructor(private coinGecko: CoingeckoService) { }

  ngOnInit(): void {
    this.coinGecko.getTokensById(this.tokens).subscribe(
      (val) => {
        val.forEach(token => {
          this.testPools.push({
            icon: token.image,
            title: token.name,
            value: token.current_price,
            tvl: 9324387,
            past24h: token.price_change_percentage_24h,
            mcap: token.market_cap,
            predicted_apr: {
              daily: 5,
              monthly: 10,
              yearly: 20
            }
          })
        })
      }
    )
  }

}
