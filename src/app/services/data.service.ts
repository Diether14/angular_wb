import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = "http://localhost:3414/api/v1/"

  constructor(private http: HttpClient) { }

  getRequest = (namespace, id = null) => {

    if(id == null){
      return this.http.get(`${this.baseUrl}${namespace}`)
    }else{
      return this.http.get(`${this.baseUrl}${namespace}/${id}`)
    }
  }
  

  postRequest =  (namespace, data) => {
    return  this.http.post(`${this.baseUrl}${namespace}`, data)
  }

  updateRequest =  (namespace, id, data) => {
    if(id == null){
      return this.http.post(`${this.baseUrl}${namespace}`, data)
    }else{
      return this.http.post(`${this.baseUrl}${namespace}/${id}`, data)
    }
  }

  deleteRequest =  (namespace, id, data) => {
    return  this.http.delete(`${this.baseUrl}${namespace}`, data)
  }

  

}
