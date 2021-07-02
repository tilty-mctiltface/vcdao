import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'investment-value',
  templateUrl: './investment-value.component.html',
  styleUrls: ['./investment-value.component.scss']
})
export class InvestmentValueComponent implements OnInit {

  @Input() initialValue: number = 0;
  @Input() currentValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
