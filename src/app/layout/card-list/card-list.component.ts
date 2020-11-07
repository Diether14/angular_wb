import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'nodaq-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() label: any
  @Input() items: Array<any>
  @Input() namespace: any

  constructor() { }

  ngOnInit(): void {
  }

}
