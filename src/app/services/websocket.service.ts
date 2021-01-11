import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';
import { catchError, tap, switchAll,delayWhen,retryWhen } from 'rxjs/operators';
import { EMPTY, Subject, Observable,timer,fromEvent } from 'rxjs';
export const WS_ENDPOINT = environment.wsEndpoint;


const ws =  webSocket(WS_ENDPOINT);
ws.subscribe(
  msg => console.log(msg),
  err => console.log(err), 
  () => console.log('complete') 
);


@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
test:any =null;
  public connect(test){
    this.getWebSocket().subscribe(
      msg => {
        this.test= msg[1]
        console.log(msg[1])
      },
      err => console.log(err), 
      () => console.log('complete') 
    )
    console.log(this.getWebSocket())
  }
  public sendMessage(msg){
    return this.getWebSocket().next(msg);
  }
  
  public getWebSocket(){
    return ws;
  }
  
}
