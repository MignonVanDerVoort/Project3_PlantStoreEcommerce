import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: IProduct[] = [];

  constructor() {}

  addToCart(product: IProduct) {
    this.cartItems.push(product);
    console.log(this.cartItems);
  }

  getCart() {
    return this.cartItems;
  }

  getTotal() {
    let total: number = 0;
    this.cartItems.forEach((product: IProduct) => {
      total += product.price;
    });
    return total;
  }
}
