import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {
  communityItems: Array<any> = [
    {
      id: 0,
      title: "aaa",
      users: 13
    },
    {
      id: 1,
      title: "bbb",
      users: 13
    },
    {
      id: 2,
      title: "ccc",
      users: 13
    },
    {
      id: 3,
      title: "ddd",
      users: 13
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
