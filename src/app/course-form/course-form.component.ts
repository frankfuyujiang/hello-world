import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

	categories=[
	{id:1,name: "Development"}, 
	{id:2,name: "English"},
	{id:3, name: "French"}
	]


  constructor() { }

  ngOnInit() {
  }
  create(f){
  	console.log(f.value)
  }

  log(x,y){
  	if(x.control.value==''){
  		x.control.value=false;
  	}
  	console.log(y)
  }

}
