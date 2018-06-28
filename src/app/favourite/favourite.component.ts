import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() checked:string;
  @Output() changed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    if (this.checked =="fas fa-star"){
      this.checked="far fa-star";
    }else{
      this.checked="fas fa-star"
    }
    this.changed.emit({newValue:this.checked});
  }
}
export interface FavouriteChangedEventArgs{
  newValue:string
}
