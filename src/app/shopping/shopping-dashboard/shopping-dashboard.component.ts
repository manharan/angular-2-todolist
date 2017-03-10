import { Component, OnInit } from '@angular/core';
import { ShoppingService } from "../../shopping.service"
import {ProductData} from "../../product"



@Component({
  selector: 'app-shopping-dashboard',
  templateUrl: './shopping-dashboard.component.html',
  styleUrls: ['./shopping-dashboard.component.css']
})
export class ShoppingDashboardComponent implements OnInit {
  shoppingListCategories: ProductData[];
  constructor (private _serve: ShoppingService ) {}

  ngOnInit() {
  //  console.log(this._serve.getProductCategory());
    this.shoppingListCategories = this._serve.getProductCategory();
  }

}
