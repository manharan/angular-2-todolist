import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem:Object = {};

  constructor() { }


  ngOnInit() {
  //  console.log(this.productItem);
  }

}
