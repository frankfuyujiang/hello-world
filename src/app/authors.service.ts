import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { 
  }
  getAuthor(){
  	return ["author1","author2","author3"];
  }
}
