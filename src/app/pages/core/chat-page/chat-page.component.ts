import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})

export class ChatPageComponent implements OnInit {
  res: any = null
  msgForm = new FormGroup({
    msg: new FormControl(''),
    room_id: new FormControl(''),
  });
  constructor(private service: WebsocketService, private ds: DataService) {
    
    // this.service.sendMessage('test');
    this.fetchRooms(45)
    this.connectToWS();
  }
  onSubmitMessage() {
    // TODO: Use EventEmitter with form value
    console.log(this.msgForm.value);
    this.service.sendMessage(this.msgForm.value)
  }
  fetchRooms(id){
    this.ds.getRequest('posts', id).subscribe(
      res=>{
        console.log(res)
        this.res = res
      },
      err => {
        console.log(err)
      }
    )
  }
  loadRooms(){
    var result;
    var currentUser = 45;    
    var room ={
      type: "rooms",
      currentUser: currentUser
    }
    this.service.sendMessage(room)
  }
  connectToWS(){
    // this.service.connect();
    // this.service.sendMessage({test:"test123"})
  }


  ngOnInit(): void {
    this.loadRooms();
    
    
  }
  

}
