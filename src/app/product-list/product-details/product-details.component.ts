import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../IProduct';
import { products } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  products!: IProduct[];
  product!: IProduct;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  onAddToCart() {
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id'];
    this.products = products;
    this.product = this.products[id];
  }
}
