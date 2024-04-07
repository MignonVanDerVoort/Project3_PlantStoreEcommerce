import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../IProduct';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems!: IProduct[];
  total!: number;
  serviceFee!: number;
  newTotal!: number;
  discount!: number;
  finalTotal!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    this.serviceFee = this.total * 0.1;
    this.newTotal = this.total + this.serviceFee;

    if (this.newTotal > 40) {
      this.discount = this.newTotal * 0.15;
    } else {
      this.discount = 0;
    }

    this.finalTotal = this.newTotal - this.discount;
  }
}
