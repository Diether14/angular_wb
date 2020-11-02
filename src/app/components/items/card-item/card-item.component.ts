import { Component, OnInit, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nodaq-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() data: any

  constructor(iconLibrary: FaIconLibrary) { 
    iconLibrary.addIcons(
      faUsers
    );
  }

  ngOnInit(): void {
  }

}
