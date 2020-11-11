import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  constructor(private productsService: ProductsService ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addNewProduct(form){
    const newProduct = {
      id: 10,
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


    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log(data);
  });
  }
}
