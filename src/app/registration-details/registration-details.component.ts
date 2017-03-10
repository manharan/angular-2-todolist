import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormModel } from "../form/form-model";

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  @Input() model:FormModel;
  @Output() onEdit: EventEmitter<Boolean> = new EventEmitter();
  constructor() { }

  editRegistration() {
    console.log('edit');
    this.onEdit.emit(true);
  }

  ngOnInit() {
  }

}
