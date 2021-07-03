import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  @Input() @HostBinding('class.round-border') roundBorder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
