import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  communityItems: any = []
  // communityItems: Array<any> 
  anotherItems: any

  constructor(private _ds: DataService) {
  }

  fetchItems(){
    this._ds.getRequest('community/user', 18).subscribe(
      res=>{
        this.communityItems = res
      },
      err => {
        console.log(err)
      }
    )
    console.log(this.communityItems)
    
    // this.ds.getData()
  }

  ngOnInit(): void {
    this.fetchItems()
  }

}
