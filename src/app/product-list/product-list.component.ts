import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productItems!: IProduct[];
  product!: IProduct;

  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
    this.productItems = products;
    this.product = this.productItems[0];
  }
}
