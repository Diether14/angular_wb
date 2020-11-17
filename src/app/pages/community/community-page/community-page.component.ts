import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {
  isLoading: Boolean = true
  categories: any = []
  currentCategory: any
  posts: any = []
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
    this._ds.getRequest('community/categories/cid', id).subscribe(
      res=>{
        this.categories = res
      },
      err => {
        console.log(err)
      }
    )
    
    // this.ds.getData()
  }

  fetchPosts(id){
    this._ds.getRequest(`community/posts/catid`, id).subscribe(
      res=>{
        this.posts = res
      },
      err => {
        console.log(err)
      }
    )
    
    // this.ds.getData()
  }

  selectCategory(id){
    this.isLoading = true
    this.currentCategory = id
    this.posts = []
    setTimeout(() => {
      this.fetchPosts(this.currentCategory = id)
      this.isLoading = false
    }, 1000);
  }


  ngOnInit(): void {
    this.fetchCategories(this.route.snapshot.params.community_id)
    setTimeout(() => {
      this.selectCategory(this.categories[0].id)
    }, 2000);
    
    
  }

}
