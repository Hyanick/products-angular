import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmPopinComponent } from 'src/app/shared/commun_components/confirm-popin/confirm-popin.component';

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
    private router: Router,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    if (this.router.url.startsWith('/produits')) {
      this.isRouteProduct = true;
    }
    this.loadAllProducts();

  }

  loadAllProducts() {
    this.productsService.getAllProducts().subscribe((data: any) => {
      console.log('data', data);
      this.product = data;
      console.log('this.product', this.product);
    })
  }

  editProduct(product: Product) {
    this.router.navigate(['produits/edit', product.id]);
  }

  openPopin(product: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.data = { product };
    const dialogRef = this.dialog.open(ConfirmPopinComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.loadAllProducts();
      }

    })
  }

}
