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
  data:any;
  currentuser=45;
  roomitems:any=null;
  roomparticipants:any=null;
  room_messages:any=null;
  msgForm = new FormGroup({
    type: new FormControl('message'),
    msg: new FormControl(''),
    room_id: new FormControl(''),
  });
  constructor(private service: WebsocketService, private ds: DataService) {
     this.connectToWS();

  }
  onSubmitMessage() {
    console.log(this.msgForm.value);
    this.service.sendMessage(this.msgForm.value)
  }
  getMessages(id){
    // console.log("clicked")
    this.ds.getRequest('chats/room', id).subscribe(
      (res:any)=>{
        console.log(res.data);
          this.room_messages =  res.data
      },
      err => {
        console.log(err)
      }
    )
  }
  getParticipants(id){
    // console.log("clicked")
    this.ds.getRequest('chats/participants', id).subscribe(
      (res:any)=>{
          console.log(res.data);
          this.roomparticipants =  res.data
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
    this.service.getWebSocket().subscribe(
      msg=>{
        this.roomitems= msg[1]
        console.log(msg[1]);
      },
      er=>er,
      ()=>console.log('success')
    )
    // this.service.sendMessage({})
  }


  ngOnInit(): void {
    this.loadRooms();    
  }
  

}
