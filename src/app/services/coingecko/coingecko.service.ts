import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "../../dtos/Token";
@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {
  private readonly GECKO_API = 'https://api.coingecko.com/api/v3/'

  constructor(private httpClient: HttpClient) { }

  // TODO sparkline true?
  public getTokensById(id: string[] | string): Observable<Token[]> {
    return this.httpClient.get<Token[]>(
      `${this.GECKO_API}coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
    )
  }
}
