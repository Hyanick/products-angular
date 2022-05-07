import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddProductComponent } from './pages/page-add-product/page-add-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { PageEditProductComponent } from './pages/page-edit-product/page-edit-product.component';
import { SharedModule } from '../shared/shared.module';


const declarations = [PageListProductsComponent, FormProductComponent, PageAddProductComponent, PageEditProductComponent]
@NgModule({
  declarations,
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: declarations,
})
export class ProductsModule { }
