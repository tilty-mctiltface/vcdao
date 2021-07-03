import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { to2DecimalPlaces } from 'src/app/utils/number.util';

@Component({
  selector: 'value-locked',
  templateUrl: './value-locked.component.html',
  styleUrls: ['./value-locked.component.scss']
})
export class ValueLockedComponent implements OnInit {
  totalValueLocked: number = 46_313_343.45;

  constructor() { }

  ngOnInit(): void {
    this.getTotalValueLocked().subscribe(() =>
      this.totalValueLocked = this.totalValueLocked + (Math.random() * 100 * (Math.round(Math.random()) ? 1 : -1))
    );
  }

  private getTotalValueLocked(): Observable<number> {
    return interval(2000);
  }

}
