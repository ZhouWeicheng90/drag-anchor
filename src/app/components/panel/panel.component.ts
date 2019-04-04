import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  loc = {
    x: 0,
    y: 0,
    info: '这里是上海！'
  };

  constructor() {}

  ngOnInit() {}
  ondragover(e) {
    e.preventDefault();
  }
  ondrop(e) {
    const original = JSON.parse(e.dataTransfer.getData('locStr'));
    const offsetX = e.x - original.x;
    const offsetY = e.y - original.y;
    this.loc.x += offsetX;
    this.loc.y += offsetY;
    console.log(this.loc.x, this.loc.y);
  }
  ondragenter(e) {
    // e.preventDefault();
  }
}
