import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productItems!: IProduct[];

  ngOnInit(): void {
    this.productItems = products;
  }
}
