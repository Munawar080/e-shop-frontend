import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { map, pipe } from 'rxjs';
import { AppUser } from '../models/appuser';
import { ShoppingCart } from '../models/shopping-cart';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shoppingcart.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appUser$: AppUser | undefined;
  shoppingCartTotalCount: number = 0;
  constructor(
    public authService: AuthService,
    private route: Router,
    private cartService: ShoppingCartService
  ) {}
  async ngOnInit(): Promise<void> {
    this.authService.appUser$.subscribe((appUser) => {
      this.appUser$ = appUser;
      console.log(appUser);
    });

    // shopping cart service

    let cart$ = await this.cartService.getCart();

    let productList$ = (
      await this.cartService.getShoppingCartProductList()
    ).pipe(
      map((changes) => {
        return changes.map((res) => {
          return {
            key: res.key as string,
            payload: res.payload.val() as ShoppingCart,
          };
        });
      })
    );
    productList$.subscribe((res) => {
      console.log(res);
      for (let id of res) {
        console.log(id.payload);
        console.log(id.key);
        if (id.key)
          this.shoppingCartTotalCount +=
            id.payload.shoppingCart[id.key].quantity;
      }
      console.log(this.shoppingCartTotalCount);
    });
    // shoppingcarts
    console.log('hello world');
  }
  logout() {
    this.authService.logout();
  }
}
