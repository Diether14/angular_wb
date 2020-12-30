import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodeDecodeService {

  constructor() { }
  public eBase64(val){
    return window.btoa(val)
  }
  public dBase64(val){
    return window.atob(val)
  }

  public decSessStore(){
    return JSON.parse(
      this.dBase64(
        sessionStorage.getItem(this.eBase64('cUsr'))
    )
  )
  }
}
