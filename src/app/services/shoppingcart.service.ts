import { ChangeDetectionStrategy } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { take } from 'rxjs/operators';
import { Products } from '../models/product-list';
import { ShoppingCart } from '../models/shopping-cart';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  // create carts
  create() {
    return this.db.list('/shopping-carts').push({
      craetedDate: new Date().getTime(),
    });
  }

  // get cart
  async getCart(): Promise<AngularFireObject<ShoppingCart>> {
    let cartId = await this.getOrCreateCart();
    return this.db.object('/shopping-carts/' + cartId);
  }

  // get product list
  async getShoppingCartProductList() {
    let cartId = await this.getOrCreateCart();
    return await this.db
      .list('/shopping-carts/' + cartId + '/items')
      .snapshotChanges();
  }

  // get or create carts
  private async getOrCreateCart() {
    // save history if shopping cart is  created
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key as string);
    return result.key as string;
  }

  getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  // add to card
  async addToCart(product: Products) {
    this.updateCart(product, 1);
  }

  removeFromCart(product: Products) {
    this.updateCart(product, -1);
  }

  async updateCart(product: Products, selected: number) {
    let cartId = await this.getOrCreateCart();

    // create node inside shopping carts
    let item$ = this.getItem(cartId, product.key as string);

    // get key from database

    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        if (item.key) {
          item$.update({
            quantity: item.payload.val().quantity + selected,
          });
        } else {
          item$.set({ product: product.payload, quantity: 1 });
        }
      });
  }
}
