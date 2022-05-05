import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-page-list-products',
  templateUrl: './page-list-products.component.html',
  styleUrls: ['./page-list-products.component.scss']
})
export class PageListProductsComponent implements OnInit {

  public product: any

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: any) => {
      console.log('data', data);
      this.product = data;
      console.log('this.product', this.product);


    })
  }

}
