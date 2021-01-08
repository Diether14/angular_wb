import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faBell, faSmile, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faHome, faUser, faCog, faPenSquare, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { UserService } from '../../services/user.service'
@Component({
  selector: 'nodaq-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMenuBarCollapsed: boolean = true
  isLogin:number= (this.us.getCookie('isLogin'))? parseInt( this.us.getCookie('isLogin')):0;
  user= this.us.getCookie('nm')
  constructor(iconLibrary: FaIconLibrary,private us: UserService,) {
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
    console.log(this.isLogin)
  }
  logout(){
    this.us.logout('logout','').subscribe((res:any)=>{
      console.log(res)
      // if(res.code===200){
        
      // }
    })
    window.location.href='/login';
    // console.log("logout")
    }

}
