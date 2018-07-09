import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
	@Input('title') title:string;
	body:string;
	panelOpen:boolean;

	constructor() {
	this.panelOpen = false;}

	panelClick(){
		this.panelOpen=!this.panelOpen;
	}

}
