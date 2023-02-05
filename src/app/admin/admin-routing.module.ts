import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from '../services/admin-guard.service';
import { AuthGaurd } from '../services/authguard.service';

const routes: Routes = [
  // {
  //   path: 'admin/orders',
  //   loadChildren: () =>
  //     import('../admin/admin-orders/admin-orders.module').then(
  //       (m) => m.AdminOrdersModule
  //     ),
  //   canActivate: [AuthGaurd, AdminAuthGuard],
  // },
  // {
  //   path: 'admin/products',
  //   loadChildren: () =>
  //     import('../admin/admin-products/admin-products.module').then(
  //       (m) => m.AdminProductsModule
  //     ),
  //   // component: AdminProductsComponent,
  //   canActivate: [AuthGaurd, AdminAuthGuard],
  //   // children: [
  //   //   {
  //   //     path: 'admin/products/new-product',
  //   //     // loadChildren: () =>
  //   //     //   import('./admin/product-form/product-form.module').then(
  //   //     //     (m) => m.ProductFormModule
  //   //     //   ),
  //   //     component: ProductFormComponent,
  //   //     canActivate: [AuthGaurd, AdminAuthGuard],
  //   //   },
  //   // ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
