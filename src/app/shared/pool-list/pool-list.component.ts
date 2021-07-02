import { Component, Input, OnInit } from '@angular/core';
import { Pool } from '../pool-list-wrapper/pool-list-wrapper.component';
import { pools } from "./mock-data";



@Component({
  selector: 'pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.scss']
})
export class PoolListComponent implements OnInit {

  @Input() pools: Pool[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
