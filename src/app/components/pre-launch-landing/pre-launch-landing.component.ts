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

  toggleInfo() {
    this.expanded = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
