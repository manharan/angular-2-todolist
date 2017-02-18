import { Component } from "@angular/core";

@Component({
  selector:"list-component",
  template:`<div>
    <h1> Child Element {{name}} </h1>
    <ul>
      <li *ngFor="let user of userList"> {{user}} </li>
    </ul>
    <button class="btn btn-primary" (click)='adduser()'> Add List </button>
  </div>`

})

export class ListComponent {
  userList:string[];
  name: string;
  constructor () {
    this.name = 'Manharan Lal Sahu';
    this.userList = ['Amit', 'Manaharan', 'Sandeep'];

  }
  adduser = function () {
    this.userList.push('Manpreet');
    
  }

}
