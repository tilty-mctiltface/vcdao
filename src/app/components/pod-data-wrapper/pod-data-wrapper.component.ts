import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'pod-data-wrapper',
  templateUrl: './pod-data-wrapper.component.html',
  styleUrls: ['./pod-data-wrapper.component.scss']
})
export class PodDataWrapperComponent implements OnInit {

  @Input() label: string = "";
  @Input() content!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
