import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  productId = 0;
  productDetails: Product;
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData;
      });
    });
  }

  // tslint:disable-next-line: typedef
  updateProduct(form){
    const updateProduct = {
      id: form.value.id,
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productimg: ' ',
      isAvailable: 1,
      color: form.value.product_color,
      reviews: form.value.product_review
    };
    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data => {
      console.log(data);
    });
  }
}
