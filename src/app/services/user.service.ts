import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:3414/api/v1/auth/"

  constructor(private http: HttpClient) { }
  login =  (namespace, data) => {
    return  this.http.post(`${this.baseUrl}${namespace}`, data)
    
    // return  this.http.post<any>(`${this.baseUrl}${namespace}`, data,{headers:{'Cookie':document.cookie},withCredentials:true})
  }
  logout =  (namespace,data) => {
    return  this.http.post(`${this.baseUrl}${namespace}`,data)
  }

  
}
