import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {Observable, timer} from "rxjs";

@Component({
  selector: 'app-pre-launch-landing',
  templateUrl: './pre-launch-landing.component.html',
  styleUrls: ['./pre-launch-landing.component.scss']
})
export class PreLaunchLandingComponent implements OnInit {
  expanded = false
  logos = ['eos.png', 'tezos.png', 'velas.png', 'luna.png']

  toggleInfo() {
    this.expanded = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
