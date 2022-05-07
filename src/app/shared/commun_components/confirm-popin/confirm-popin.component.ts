import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-confirm-popin',
  templateUrl: './confirm-popin.component.html',
  styleUrls: ['./confirm-popin.component.scss']
})
export class ConfirmPopinComponent implements OnInit {
  public productName: string = '';
  public productId: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.productName = this.data.product.name;
    this.productId = this.data.product.id
  }

  onClick() {
    this.productService.deleteProduct(this.productId).subscribe({
      next: (data: any) => {

      }
    })
  }

}
