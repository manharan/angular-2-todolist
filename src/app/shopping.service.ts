import { Injectable } from '@angular/core';
import {ProductData} from "./product";

@Injectable()
export class ShoppingService {
  categoryProducts: ProductData[] = [
    {id:1, name:'TOP BRANDS',price:899, category:"Mans ", link:'/' },
    {id:2, name:'MAN\'S BRANDS',price:899, category:"Mans ", link:'/' },
    {id:3, name:'ADDIDAS BRANDS',price:899, category:"Mans ", link:'/' },
    {id:4, name:'REEBOK BRANDS',price:899, category:"Mans ", link:'/' },
    {id:5, name:'LEE COOPER BRANDS',price:899, category:"Mans ", link:'/' },
    {id:6, name:'CROSS BRANDS',price:899, category:"Mans ", link:'/' },
    {id:7, name:'ET BRANDS',price:899, category:"Mans ", link:'/' },
    {id:8, name:'SHO BRANDS',price:899, category:"Mans ", link:'/' },
    {id:9, name:'KEY BRANDS',price:899, category:"Mans ", link:'/' },
    {id:10, name:'LOOP BRANDS',price:899, category:"Mans ", link:'/' }
  ]
  constructor() { }

  getProductCategory () {
    return this.categoryProducts;

  }


}
