import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoticon-store',
  templateUrl: './emoticon-store.component.html',
  styleUrls: ['./emoticon-store.component.scss']
})
export class EmoticonStoreComponent implements OnInit {
  emoticonItems: any = [
    { id: 1, name: "Bundle 1", price: "19.99", image: "assets/placeholders/emoticon-placeholder.png" },
    { id: 2, name: "Bundle 2", price: "19.99", image: "assets/placeholders/emoticon-placeholder.png" },
    { id: 3, name: "Bundle 3", price: "19.99", image: "assets/placeholders/emoticon-placeholder.png" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
