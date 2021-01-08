import { Component, OnInit,AfterViewChecked,ElementRef,ViewChild, QueryList, AfterViewInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service'
import { FormGroup, FormControl} from '@angular/forms'



@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})


export class ChatPageComponent implements OnInit,AfterViewInit {
  @ViewChild('chatbox') private myScrollContainer: ElementRef;
  @ViewChild('roomitem') roomItem:  ElementRef;
  data:any;
  currentuser=45;
  currentroom:number;
  room_name:any=null;
  room_items:any=null;
  roomparticipants:any=null;
  room_messages:any=null;
  room_messages2:any=null;
  msgForm = new FormGroup({

    type: new FormControl('message'),
    message: new FormControl(''),
    created_at: new FormControl(Date.now())
  });
  public height: any;
  constructor(private service: WebsocketService, private ds: DataService, private us: UserService) {
     this.connectToWS();

  }

  ngOnInit(): void {
    this.loadRooms();    
    this.scrollToBottom(); 
  }
  ngAfterViewInit(){
    console.log("roomitem: "+  this.roomItem)
    // this.roomItem.forEach((item, index) => {
    //   console.log(item)
    // });
  }
  ngAfterViewChecked() {   
         
    this.scrollToBottom();        
  }   
  onSubmitMessage() {
    // this.connectToWS();
    console.log(this.msgForm);
    this.service.sendMessage(this.msgForm.value)
    this.msgForm.reset()
    // this.loadRooms()
  }
  setCurrentRoom(room_id){
    this.currentroom=room_id
    this.msgForm.addControl('room_id',new FormControl(room_id)) 
  }
  getCurrentRoom(){
    console.log(this.currentroom)
    return this.currentroom;
  }
  setCurrentRoomName(name){
    this.room_name=name
  }
  getMessages(id){
    console.log(id)
    this.setCurrentRoom(id)
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
  loadRooms(){
    var result; 
    var room ={
      type: "rooms"
    }

    this.service.sendMessage(room)
  }
  connectToWS(){
    this.service.getWebSocket().subscribe(
      msg=>{
        console.log(msg[0].type)
        console.log(msg[0].room_id)
        // console.log(this.currentroom)
        if(msg[0].type==="rooms"){
          console.log(msg[1])
          this.room_items= msg[1]
        }
        if(msg[0].type==='message'&& msg[0].room_id==this.currentroom){
          // console.log("message")
          console.log(msg)
          this.room_messages.push(msg[0])
        }
        
      },
      er=>er,
      ()=>console.log('success')
    )
  }
  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }
  

}
