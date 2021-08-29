import { Component, OnInit } from '@angular/core';
import {Observable, timer} from "rxjs";
import {map} from "rxjs/operators";

interface ViewModel {
  readonly time: string;
  readonly digits: ReadonlyArray<string>;
}

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  // totalSeconds = new Date("2021-08-30T16:40:46.991Z").getTime() / 1000
  readonly cells = Array(3 * 5).fill(undefined);
  readonly vm$: Observable<ViewModel> = timer(0, 25).pipe(
    map(() => new Date()),
    map(date => {
      const time = date.toISOString();
      let totalSeconds = (new Date("2021-09-07T12:00:00.000Z").getTime() - new Date().getTime()) / 1000
      const hour = this.padStart(`${Math.floor(totalSeconds / 3600)}`, 2, '0');
      totalSeconds %= 3600;
      const minute = this.padStart(`${Math.floor(totalSeconds / 60)}`, 2, '0');

      const second = this.padStart(`${Math.floor(totalSeconds % 60)}`, 2, '0');
      const digits = [...hour, ...minute, ...second];
      return {
        time,
        digits
      };
    })
  );
  readonly digitIndex = (index: any) => index;
  readonly cellIndex = (index: any) => index;

  padStart(str: string, maxLength: number, fill: string): string {
    while (str.length < maxLength) {
      str = fill + str;
    }
    return str;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
