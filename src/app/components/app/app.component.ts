import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../../services/controls/controls.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  // TODO: load this json from assets/mindmap.json
  json: MindMapJSON = [
    {
      title: 'First level',
      options: {
        color: 'green',
        labels: [
          'label 1',
          'label 2'
        ]
      },
      children: [
        {
          title: 'Second level',
          children: [
            {
              title: 'Third level',
              options: {
                labels: [
                  'label 3',
                ]
              },
              children: [
                {
                  title: '1',
                },
                {
                  title: '2',
                  options: {
                    labels: [
                      'label 4',
                    ]
                  },
                },
                {
                  title: '3',
                },
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'First level',
      options: {
        color: 'blue',
      },
      children: [
        {
          title: 'Second level',
          children: [
            {
              title: 'Third level',
              children: [
                {
                  title: '1',
                },
                {
                  title: '2',
                },
                {
                  title: '3',
                },
              ]
            }
          ]
        }
      ]
    }
  ];
  controlsForm = new FormGroup({
    showLabels: new FormControl(true),
  });

  constructor(
    private controlsService: ControlsService,
  ) {
    this.controlsForm.valueChanges.subscribe(newControls => {
      this.controlsService.setConfiguration(newControls);
    });
  }

  ngOnInit() {
  }
}
