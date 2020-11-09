import { Category } from './../../layout/category';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  searchcategory: Category;
  productList: Product;
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.searchcategory = data.id;

      this.productsService.searchCategoryProducts(this.searchcategory).subscribe(categoryData => {
        this.productList = categoryData;
      });
    });
  }

}
