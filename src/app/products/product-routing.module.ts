import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { PageAddProductComponent } from './pages/page-add-product/page-add-product.component';

const routes: Routes = [
  {
    path: '',
    component: PageListProductsComponent
  },
  {
    path: 'add',
    component: PageAddProductComponent,
    //data: { title: 'prestations', subtitle: 'Ajouter une prestation' }
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
