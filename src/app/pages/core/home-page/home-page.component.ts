import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
