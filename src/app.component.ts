import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app.component.html'
})

export class AppComponent {
  data: Array<any>= [
    {
      term: "t1",
      termHtml: "<b>T1</b>",
      count: 1,
      children: [
        {
          term: "t1.1",
          count: 2,
          children: [
            {
              term: "t1.1.1",
              count: 3,
              children: [{ term: "t1.1.1.1" }, { term: "t1.1.1.2" }],
            },
            {
              term: "t1.1.2",
              count: 0,
            }
          ],
        },
        {
          term: "t1.2",
          count: 4,
        }
      ],
    },
    {
      term: 2,
      count: 5,
      children: [
        {
          term: "t2.1",
          count: 2,
        },
        {
          term: "t2.2",
          children: [{ term: "t2.2.1" }, { term: "t2.2.2" }],
        }
      ],
    }
  ];
  
  
  constructor() {
    this.addFlag(this.data)
  }

  addFlag(node:any) {
    if(node.children) {
      node.toggle = false;
      for(let childNode of node.children) {
        this.addFlag(childNode)
      }
    }
  }
}