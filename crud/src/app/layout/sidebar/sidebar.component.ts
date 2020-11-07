import { Category } from './../category';
import { ProductsService } from './../../products/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList: Category;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data => {
      this.categoryList = data;
    });
  }

}
