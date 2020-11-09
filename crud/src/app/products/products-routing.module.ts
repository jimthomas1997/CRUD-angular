import { CreateProductsComponent } from './create-products/create-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

const routes: Routes = [
  { path: '',
   component: ViewAllProductsComponent
  },
  { path: 'view-products/:id',
   component: ViewProductsComponent
  },
  { path: 'create-products',
   component: CreateProductsComponent
  },
  { path: 'view-products-by-date',
   component: ViewAllProductsByDateComponent
  },
  { path: 'category/:id',
   component: ViewAllProductsByCategoryComponent
  },
  { path: 'update-products/:id',
   component: UpdateProductsComponent
  },
  { path: 'delete-products/:id',
   component: DeleteProductsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
