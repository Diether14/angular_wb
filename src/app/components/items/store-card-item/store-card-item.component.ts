import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nodaq-store-card-item',
  templateUrl: './store-card-item.component.html',
  styleUrls: ['./store-card-item.component.scss']
})
export class StoreCardItemComponent implements OnInit {
  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}
