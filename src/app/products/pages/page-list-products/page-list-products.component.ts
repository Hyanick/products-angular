import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-page-list-products',
  templateUrl: './page-list-products.component.html',
  styleUrls: ['./page-list-products.component.scss']
})
export class PageListProductsComponent implements OnInit {

  public product: any;
  public isRouteProduct: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (this.router.url.startsWith('/produits')) {
      this.isRouteProduct = true;

    }


    this.productsService.getAllProducts().subscribe((data: any) => {
      console.log('data', data);
      this.product = data;
      console.log('this.product', this.product);
    })
  }

}
