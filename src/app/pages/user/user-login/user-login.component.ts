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
          if(res.code===200){
            window.location.href='/chat';
          }
          
      }

    ) 
  }
  ngOnInit(): void {
  }

}
