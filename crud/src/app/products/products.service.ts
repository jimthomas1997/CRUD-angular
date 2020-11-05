import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }


  createProduct(productbody){
    const url = 'http://localhost:3000/products';
    return this.httpClient.post(url, productbody);
  }

  viewProduct(productId){
    const url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.get(url);
  }

  updateProduct(productId, productbody){
    const url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put(url, productbody);
  }

  deleteProduct(productId){
    const url = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete(url);
  }

  searchCategoryProducts(categoryId){
    const url = 'http://localhost:3000/products/' + categoryId;
    return this.httpClient.get(url);
  }

  searchDateProducts(dateParam){
    const url = 'http://localhost:3000/products/date=' + dateParam;
    return this.httpClient.get(url);
  }
}
