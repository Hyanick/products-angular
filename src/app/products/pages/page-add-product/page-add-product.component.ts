import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-page-add-product',
  templateUrl: './page-add-product.component.html',
  styleUrls: ['./page-add-product.component.scss']
})
export class PageAddProductComponent implements OnInit {

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  public addProduct(product: Product) {
    this.productService.addProduct(product).subscribe({
      next: (data: any) => {
        this.router.navigate(['../'], { relativeTo: this.aRoute })
      }
    })
  }

}
