import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  orientation = 'vertical';

  constructor() { }

  ngOnInit() {
  }

}
