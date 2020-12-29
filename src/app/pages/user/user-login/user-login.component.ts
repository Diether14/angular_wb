import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})


export class UserLoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private us: UserService) {

  }

  eBase64(val){
    return window.btoa(val)
  }
  login(){
    const user ={ 
      username:  this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }
    // console.log(JSON.stringify(this.loginForm))
    this.us.login('login', user).subscribe(
      (res:any)=>{
          console.log(res)
          sessionStorage.setItem(this.eBase64('cUsr'),this.eBase64(res.id))
          if(res.code===200){
            window.location.href='/home';
          }
          
      }

    )  
  }
  // this.ds.getRequest('chats/room', id).subscribe(
  //   (res:any)=>{
  //     console.log(res.data);
  //       this.room_messages =  res.data
        
  //   },
  //   err => {
  //     console.log(err)
  //   }
  // )
  ngOnInit(): void {
  }

}
