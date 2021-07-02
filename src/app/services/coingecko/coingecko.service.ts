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
  public getTokenById(id: string): Observable<Token> {
    return this.httpClient.get<Token>(
      `${this.GECKO_API}coins/${id}?localization=false&sparkline=false`
    )
  }
}
