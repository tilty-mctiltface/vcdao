import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-platform',
  templateUrl: './web-platform.component.html',
  styleUrls: ['./web-platform.component.scss']
})
export class WebPlatformComponent implements OnInit {
  account = '0x9f96604dBE36cef825d45e189CBed14A8A9e3B9a'
  constructor() { }

  ngOnInit(): void { }

}
