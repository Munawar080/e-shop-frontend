import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../models/product-list';
import { ShoppingCartService } from '../services/shoppingcart.service';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  @Input() product: any;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: any;
  constructor(private cartServices: ShoppingCartService) {}
  addToCart() {
    this.cartServices.addToCart(this.product);
  }
  removeFromCart() {
    this.cartServices.removeFromCart(this.product);
  }
  getQuantity() {
    return 0;
    // if (!this.shoppingCart) return 0; // protect from null value
    // let item = this.shoppingCart.items[this.product.key];
    // return item ? item.quantity : 0;
  }
}
