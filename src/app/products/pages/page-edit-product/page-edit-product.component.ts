import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-page-edit-product',
  templateUrl: './page-edit-product.component.html',
  styleUrls: ['./page-edit-product.component.scss']
})
export class PageEditProductComponent implements OnInit {
  public product$: Observable<any>;
  public id: string = '';
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.product$ = this.aRoute.paramMap.pipe(
      switchMap((param: ParamMap) => {
        this.id = param.get('id')!;
        return this.productService.getProduct(param.get('id')!);
      })
    )
   }

  ngOnInit(): void {

  }

  public updateProduct(p: Product) {
    p.id = this.id;
    this.productService.updateProduct(p).subscribe({
      next: (data: any) => {
        this.router.navigate(['../../'], { relativeTo: this.aRoute });
        this.productService.getAllProducts().subscribe({
          next: (data: any) => {

          }
        })
      }
    })
  }

}
