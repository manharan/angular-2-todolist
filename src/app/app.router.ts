import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormComponent } from './form/form.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component'
import {TwitterComponent} from "./twitter/twitter.component";
import {FacebookComponent} from "./facebook/facebook.component";
import {GmailComponent} from "./gmail/gmail.component";
import {ShoppingComponent} from "./shopping/shopping.component";

import {ShoppingDashboardComponent} from "./shopping/shopping-dashboard/shopping-dashboard.component"
import {ShoppingListComponent} from "./shopping/shopping-list/shopping-list.component"
import {ProductDetailsComponent} from "./shopping/product-details/product-details.component"


export const router:Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:TodoListComponent},
  {path:'form', component:FormComponent},
  {path:'shopping', component:ShoppingComponent,
    children: [
      {path:'', redirectTo:"productDashboard", pathMatch:'full' },
      {path:'productDashboard', component:ShoppingDashboardComponent},
      {path:'productList', component:ShoppingListComponent},
    ]
  },
  {path:'productDetails/:id', component:ProductDetailsComponent},
  {path:'twitter', component:TwitterComponent},
  {path:'facebook', component:FacebookComponent},
  {path:'gmail', component:GmailComponent},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
