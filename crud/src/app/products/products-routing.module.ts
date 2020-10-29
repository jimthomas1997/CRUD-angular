import { CreateProductsComponent } from './create-products/create-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '',
   component: ProductsComponent
  },
  { path: 'create-products',
   component: CreateProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
