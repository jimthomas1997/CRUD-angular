import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  productId = 0;
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.deleteProduct(this.productId).subscribe(deleteData => {
          console.log('deleted');
      });
    });
  }

}
