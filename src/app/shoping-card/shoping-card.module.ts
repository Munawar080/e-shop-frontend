import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopingCardRoutingModule } from './shoping-card-routing.module';
import { ShopingCardComponent } from './shoping-card.component';


@NgModule({
  declarations: [
    ShopingCardComponent
  ],
  imports: [
    CommonModule,
    ShopingCardRoutingModule
  ]
})
export class ShopingCardModule { }
