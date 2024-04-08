import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'], // Corrected styleUrls
})
export class ProductListComponent implements OnInit {
  productItems!: IProduct[];

  constructor(private cartService: CartService) {}

  onAddToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.productItems = products;
  }
}
