import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from '../todo-service.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoServiceService]

})
//implements OnInit
export class TodoListComponent {
  todos:any[];
  labelAddBtn: string = 'ADD';
  editTodoItemID: number;
  constructor(private _todoService: TodoServiceService) { }

  userTodo:Object = {};
  deleteTodo = function (index) {
    var targetIndex = (index - 1)
    this.todos.splice(targetIndex, 1);
  }
  submit = function () {
    this.addTodo();
  }
  addTodo = function () {
    if(this.labelAddBtn == 'UPDATE') {
      this.labelAddBtn = 'ADD'
        for(var i=0; i<this.todos.length; i++) {
          if(this.todos[i].id == this.editTodoItemID) {
              this.todos[i].label =  this.userTodo.firstName;
          }
        }
    } else {
      if(!this.userTodo.firstName){return}
      this.todos.push({id:(this.todos.length + 1), label: this.userTodo.firstName, archived:false});
    }
    this.userTodo.firstName = '';
  }
 editTodo = function (todo) {
   this.editTodoItemID = todo.id;
   this.userTodo.firstName = todo.label;
   this.labelAddBtn = 'UPDATE';
 }

  ngOnInit() {
    this.todos = this._todoService.getTodoList();
    console.log('service injectable '+this._todoService.getTodoList())
  }

}
