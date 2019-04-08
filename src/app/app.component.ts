import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  // TODO: load this json from assets/mindmap.json
  json: MindMapJSON = [
    {
      title: 'First level',
      options: {
        color: 'red',
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
    },
    {
      title: 'First level',
      options: {
        color: 'red',
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

  ngOnInit() {
  }
}
