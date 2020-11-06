import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }


  createProduct(productbody): Observable<Product>{
    const url = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(url, productbody);
  }

  viewProduct(productId): Observable<Product>{
    const url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.get<Product>(url);
  }

  updateProduct(productId, productbody): Observable<Product>{
    const url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put<Product>(url, productbody);
  }

  deleteProduct(productId): Observable<Product>{
    const url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete<Product>(url);
  }

  searchCategoryProducts(categoryId): Observable<Product>{
    const url = 'http://localhost:3000/products/' + categoryId;
    return this.httpClient.get<Product>(url);
  }

  searchDateProducts(dateParam): Observable<Product>{
    const url = 'http://localhost:3000/products/date=' + dateParam;
    return this.httpClient.get<Product>(url);
  }
}
