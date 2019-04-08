import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_CONTROLS_CONFIG, DEFAULT_NODE_OPTIONS } from '../../constants';
import { Subscription } from 'rxjs';
import { ControlsService } from '../../services/controls/controls.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})

export class NodeComponent implements OnInit {
  @Input() node: MindMapNode;

  subscription: Subscription;
  controlsConfig: ControlsConfig = DEFAULT_CONTROLS_CONFIG;

  constructor(
    private controlsService: ControlsService,
  ) {
    this.subscription = this.controlsService.getConfiguration().subscribe((controlsConfig: ControlsConfig) => {
      this.controlsConfig = controlsConfig ? Object.assign({}, DEFAULT_CONTROLS_CONFIG, controlsConfig) : DEFAULT_CONTROLS_CONFIG;
    });
  }

  get options(): MindMapNodeOptions {
    return this.node.options ? Object.assign({}, DEFAULT_NODE_OPTIONS, this.node.options) : DEFAULT_NODE_OPTIONS;
  }

  ngOnInit() {
    console.log(this.node);
  }

}
