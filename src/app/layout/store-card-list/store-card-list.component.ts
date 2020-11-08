import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nodaq-store-card-list',
  templateUrl: './store-card-list.component.html',
  styleUrls: ['./store-card-list.component.scss']
})
export class StoreCardListComponent implements OnInit {

  @Input() label: any
  @Input() storeItems: Array<any>
  @Input() namespace: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.storeItems)
  }

}
