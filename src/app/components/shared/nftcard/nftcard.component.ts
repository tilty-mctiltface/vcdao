import {Component, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'nftcard',
  templateUrl: './nftcard.component.html',
  styleUrls: ['./nftcard.component.scss']
})
export class NftcardComponent implements OnInit {
  single = [
    {
      "name": "Gold",
      "value": 89400
    },
    {
      "name": "Silver",
      "value": 50000
    }];

  // options
  gradient: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#FFDF01', '#7c8288']
  };

  constructor() {
  }

  ngOnInit(): void {
    // this.getInterval().subscribe(
    //   () => {
    //     this.single = [
    //       {
    //         "name": "Gold",
    //         "value": 89400 + Math.floor(Math.random() * (10000 - 1 + 1) + 1)
    //       },
    //       {
    //         "name": "Silver",
    //         "value": 50000 + Math.floor(Math.random() * (10000 - 1 + 1) + 1)
    //       }]
    //   }
    // )
  }
  getInterval(): Observable<number> {
    return interval(5000)
  }
}
