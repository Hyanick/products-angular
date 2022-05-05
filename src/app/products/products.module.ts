import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { AngularMaterialModule } from '../angular-material.module';


const declarations = [PageListProductsComponent]
@NgModule({
  declarations,
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: declarations
})
export class ProductsModule { }
