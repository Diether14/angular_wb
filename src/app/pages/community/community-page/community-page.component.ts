import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {
  categories: any = []
  communityItems: Array<any> = [
    {
      id: 0,
      title: "aaa",
      users: 13
    },
    {
      id: 1,
      title: "bbb",
      users: 13
    },
    {
      id: 2,
      title: "ccc",
      users: 13
    },
    {
      id: 3,
      title: "ddd",
      users: 13
    },
  ]
  
  constructor(private route: ActivatedRoute, private _ds: DataService) { }

  fetchCategories(id){
    this._ds.getRequest('categories/cid', id).subscribe(
      res=>{
        console.log(res)
        this.categories = res
      },
      err => {
        console.log(err)
      }
    )
    
    // this.ds.getData()
  }

  fetchPosts(id){
    this._ds.getRequest(`posts/catid/${id}`, id).subscribe(
      res=>{
        console.log(res)
        this.categories = res
      },
      err => {
        console.log(err)
      }
    )
    
    // this.ds.getData()
  }


  ngOnInit(): void {
    this.fetchCategories(this.route.snapshot.params.community_id)
  }

}
