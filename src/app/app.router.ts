import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component'

export const router:Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:TodoListComponent},
  {path:'add', component:AddTodoComponent},
  {path:'edit', component:EditTodoComponent},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
