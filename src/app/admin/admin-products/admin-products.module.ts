import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsRoutingModule } from './admin-products-routing.module';
import { AdminProductsComponent } from './admin-products.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [AdminProductsComponent],
  imports: [CommonModule, AdminProductsRoutingModule, DataTablesModule],
})
export class AdminProductsModule {}
