import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faBell, faSmile, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faHome, faUser, faCog, faPenSquare, faUserFriends } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'nodaq-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMenuBarCollapsed: boolean = true

  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(
      faHome,
      faBell,
      faSmile,
      faSearch,
      faUserCircle,
      faUser,
      faUserFriends,
      faPenSquare,
      faCog
    );
  }

  ngOnInit(): void {
  }

}
