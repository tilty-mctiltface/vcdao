import { Component, OnInit } from '@angular/core';
import {CoingeckoService} from "../../services/coingecko/coingecko.service";
import {Token} from "../../dtos/Token";

@Component({
  selector: 'app-running-ticker',
  templateUrl: './running-ticker.component.html',
  styleUrls: ['./running-ticker.component.scss']
})
export class RunningTickerComponent implements OnInit {
  private tokenNames = ['eos', 'velas', 'tezos', 'eleven-finance','terra-luna', 'tbcc-wallet']
  public tokens: Token[] = []
  constructor(private coinGecko: CoingeckoService) { }

  ngOnInit(): void {
    this.coinGecko.getTokensById(this.tokenNames).subscribe(
      (val) => {
        this.tokens = val
      }
    )
  }

}
