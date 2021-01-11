import { Component, OnInit,AfterViewChecked,ElementRef,ViewChild, QueryList, AfterViewInit, ViewChildren } from '@angular/core';
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
  // @ViewChild('roomitem') private roomItem: ElementRef;
  @ViewChildren('roomitem',{read:ElementRef}) public roomItem: QueryList<ElementRef>;
  data:any;
  currentuser;
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
  constructor(private service: WebsocketService, private ds: DataService, private us: UserService, ) {
     this.connectToWS();

  }
  ngAfterViewInit(){
    // setTimeout(() => {
    //   // console.log(this.roomItem);
    //   // const item = this.roomItem
    //   // console.log("firstItem:"+ item)
    //   // this.roomItem.first.nativeElement.click();
      
    // }, 200);
    setTimeout(()=>{
      this.selectFirstRoom()
      // item.nativeElement
    },1000)
    
  }

  ngOnInit(): void {
    this.loadRooms();    
    this.scrollToBottom();
  }
  
  ngAfterViewChecked() {   
    // setTimeout(()=>{
    //   this.selectFirstRoom()
    //   // item.nativeElement
    // },1000)
         
    this.scrollToBottom(); 
         
  }   
  onSubmitMessage() {
    // this.connectToWS();
    // console.log(this.msgForm);
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
    var room ={
      type: "rooms",
      sender_id: this.us.getCookie('id')
    }
    this.service.sendMessage(room)
  }
  connectToWS(){
    this.service.getWebSocket().subscribe(
      msg=>{
        console.log(msg[0])
        if(msg[0].type==="rooms" && this.us.getCookie('id')===msg[0].sender_id){
          console.log(msg)
          this.room_items= msg[1]
          this.currentuser=msg[1][0].user_id
        }
        if(msg[0].type==='message'&& msg[0].room_id==this.currentroom){
          console.log("message")
          console.log(msg)
          this.room_messages.push(msg[0])
        }
      },
      er=>er,
      ()=>console.log('success')
    )
  }
  selectFirstRoom(){
    var subscription =this.roomItem.changes.subscribe(item=>{
        item.first.nativeElement.click()
        subscription.unsubscribe()
    },err=>{})
    // console.log(this.roomItem)
    // this.roomItem.forEach((test)=>{
    //   console.log(test)
    // })
    // console.log(this.roomItem.toArray())
  }
  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  

}
