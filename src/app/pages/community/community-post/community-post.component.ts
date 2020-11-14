import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-community-post',
  templateUrl: './community-post.component.html',
  styleUrls: ['./community-post.component.scss']
})
export class CommunityPostComponent implements OnInit {
  postId: Number = this.route.snapshot.params.post_id
  post: any = null
  comments: any = []

  constructor(private route: ActivatedRoute, private _ds: DataService) { }

  fetchPost(id){
    this._ds.getRequest('posts', id).subscribe(
      res=>{
        console.log(res)
        this.post = res
      },
      err => {
        console.log(err)
      }
    )
  }
  
  fetchComments(id){
    this._ds.getRequest('posts/comments/post', id).subscribe(
      res=>{
        console.log(res)
        this.comments = res
      },
      err => {
        console.log(err)
      }
    )
  }

  
  

  ngOnInit(): void {
    console.log(this.postId)
  }

}
