import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routes} from './app.router';


import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { NavigationComponent } from './app.navigation.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormComponent } from './form/form.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component'


@NgModule({
  declarations: [
    AppComponent, ListComponent, NavigationComponent, TodoListComponent, FormComponent, EditTodoComponent, TodoFormComponent, RegistrationDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
