import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_NODE_OPTIONS } from '../constants';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})

export class NodeComponent implements OnInit {
  @Input() node: MindMapNode;

  constructor() {

  }

  get options(): MindMapNodeOptions {
    return this.node.options ? Object.assign({}, DEFAULT_NODE_OPTIONS, this.node.options) : DEFAULT_NODE_OPTIONS;
  }

  ngOnInit() {
    console.log(this.node);
  }

}
