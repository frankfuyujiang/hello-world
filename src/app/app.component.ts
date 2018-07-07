import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   post = {
  	title:'app',
  	checked:"far fa-star",
  	isLiked:false,
  	likeCount:0
  }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs){
  	console.log("changed", eventArgs);
  }
}
