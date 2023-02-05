import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFormRoutingModule } from './product-form-routing.module';
import { ProductFormComponent } from './product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [CommonModule, ProductFormRoutingModule, FormsModule],
})
export class ProductFormModule {}
