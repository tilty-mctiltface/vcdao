import { Component, OnInit } from '@angular/core';

export enum HealthStatus {
  GOOD = 'Good',
  BAD = 'Bad',
}

@Component({
  selector: 'pod-health',
  templateUrl: './pod-health.component.html',
  styleUrls: ['./pod-health.component.scss']
})
export class PodHealthComponent implements OnInit {

  healthStatus: HealthStatus = HealthStatus.GOOD;

  constructor() { }

  ngOnInit(): void {
  }

}
