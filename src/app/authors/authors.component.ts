import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
	title:string;
	authors;
	isActivate = true;
  sampletext;

  constructor(service: AuthorsService) {
  	this.authors = service.getAuthor()
  }

  ngOnInit() {
  	this.title="Authors"
  }
}
