import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent }
    ])
  ],
  providers: [ProductService]
})
export class ProductModule { }
