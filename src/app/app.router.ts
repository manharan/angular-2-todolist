import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormComponent } from './form/form.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component'

export const router:Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:TodoListComponent},
  {path:'form', component:FormComponent},
  {path:'edit', component:EditTodoComponent},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
