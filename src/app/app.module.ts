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
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';
import { GmailComponent } from './gmail/gmail.component';
import { ShoppingDashboardComponent } from './shopping/shopping-dashboard/shopping-dashboard.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ProductItemComponent } from './shopping/product-item/product-item.component'

import {ShoppingService} from "./shopping.service";
import { ProductDetailsComponent } from './shopping/product-details/product-details.component'

@NgModule({
  declarations: [
    AppComponent, ListComponent, NavigationComponent, TodoListComponent, FormComponent, EditTodoComponent, TodoFormComponent, RegistrationDetailsComponent, ShoppingComponent, FacebookComponent, TwitterComponent, GmailComponent, ShoppingDashboardComponent, ShoppingListComponent, ProductItemComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
