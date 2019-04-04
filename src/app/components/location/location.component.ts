import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  showTip = false;

  @Input()
  loc = { x: 0, y: 0, info: 'abc' };

  constructor() {}

  ngOnInit() {}
  ondrag(e) {}
  ondragend(e) {}
  ondragstart(e) {
    let locl = {
      x: e.x,
      y: e.y
    };
    e.dataTransfer.setData('locStr', JSON.stringify(locl));
  }
  mouseenter() {
    this.showTip = true;
  }
  mouseleave() {
    this.showTip = false;
  }
  onclick() {}
}
