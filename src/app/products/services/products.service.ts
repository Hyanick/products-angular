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
}
