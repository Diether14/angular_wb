import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = "http://localhost:3414/api/vi/"

  constructor(private http: HttpClient) { }

  getData = (link, data = null) => {
    console.log(this.baseUrl + link)
    // this.http.get(this.baseUrl + link)
  }
  

}
