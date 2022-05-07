import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(`${this.urlApi}/products`)
  }

  public addProduct(p: Product): Observable<any> {
    return this.http.post(`${this.urlApi}/products`, p);
  }

  public getProduct(id: string) {
    return this.http.get<Product>(`${this.urlApi}/products/${id}`)
  }

  public updateProduct(p: Product) {
    console.log('produit', p);
    //const product = {... p}

    return this.http.put(`${this.urlApi}/products/${p.id}`, p)
  }

  public deleteProduct(id: string) {
    return this.http.delete(`${this.urlApi}/products/${id}`);

  }
}
