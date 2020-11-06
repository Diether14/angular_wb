import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = "http://localhost:3414/api/v1/"

  constructor(private http: HttpClient) { }

  getData = (namespace, id = null) => {

    if(id == null){
      return this.http.get(`${this.baseUrl}${namespace}`)
    }else{
      return this.http.get(`${this.baseUrl}${namespace}/${id}`)
    }
  }
  

  postData =  (link, data) => {
    return  this.http.post(this.baseUrl + link, data)
  }
  

}
