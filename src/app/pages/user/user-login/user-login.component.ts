import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { EncodeDecodeService } from 'src/app/services/encode-decode.service';
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

  constructor(private us: UserService, private ed: EncodeDecodeService ) {
  }


  login(){
    const user ={ 
      username:  this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }
    // console.log(JSON.stringify(this.loginForm))
    this.us.login('login', user)
    // .get<any>('url', {observe: 'response'})
    .subscribe(
      (res:any)=>{
        console.log(res)
          document.cookie  = `nodaqsession=${res}`

          console.log(document.cookie)
          // console.log(res)
          sessionStorage.setItem(
            this.ed.eBase64('cUsr'),this.ed.eBase64(JSON.stringify({
              id:this.ed.eBase64(res.id),
              nm: this.ed.eBase64(res.name)
          })))
          // console.log
          // console.log(
          //   this.ed.decSessStore()['id']+""+
          //   this.ed.decSessStore()['nm']
          // )
          // if(res.code===200){
          //   window.location.href='/chat';
          // }
          
      }

    ) 
  }
  // logout(){
  // this.us.logout('logout')
  // }
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
