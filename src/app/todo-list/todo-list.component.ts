import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
//implements OnInit
export class TodoListComponent {
  //todos:any[];
  //constructor() { }

  userTodo:Object = {};
  deleteTodo = function (index) {
    var targetIndex = (index - 1)
    this.todos.splice(targetIndex, 1);
  }
  submit = function () {
    this.addTodo();
  }
  addTodo = function () {
    this.todos.push({id:(this.todos.length + 1), label: this.userTodo.firstName, archived:false});
    this.userTodo.firstName = '';
  }
  todos = [
    {id:1, label:'every saturday wash the clothes', archived:false},
    {id:2, label:'every saturday wash the clothes', archived:false},
    {id:3, label:'every saturday wash the clothes', archived:false},
    {id:4, label:'every saturday wash the clothes', archived:false},
    {id:5, label:'every saturday wash the clothes', archived:false}
  ]

  ngOnInit() {
  }

}
