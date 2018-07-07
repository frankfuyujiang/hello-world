import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
	@Input('isLiked') isLiked:boolean;
	@Input('likeCount') likeCount:number;


  constructor() { }

  ngOnInit() {
  }
  onClick(){
  	if (this.isLiked){
  		this.likeCount -=1;
  		this.isLiked=!this.isLiked;
  	}else{
  		this.likeCount +=1;
  		this.isLiked = !this.isLiked;
  	}
  }

}
