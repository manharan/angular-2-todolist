import { Component, OnInit } from '@angular/core';
import { FormModel } from "./form-model";


@Component({
  moduleId: module.id,
  selector: 'form-box',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //model:Object = {}
  submitted:boolean = false;
  genders: string[] = ['Male', 'Female'];
  model = new FormModel(1, 'manaharan', 'manohar@gmail.com', 'dell', 8095465645, 'male');
  constructor() { }

  submitRegistration () {
    console.log('submit regisration ');
    this.submitted = true;
  }
  editRegistration () {
    this.submitted = false;
  }
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
