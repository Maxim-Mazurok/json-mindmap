import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.scss']
})
export class MindMapComponent implements OnInit {

  @Input() json: MindMapJSON;

  constructor() {
  }

  ngOnInit() {
    console.log(this.json);
  }

}
