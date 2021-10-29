import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { productService } from 'src/models/mock-products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {} as Product;
  product_id: string;

  constructor(private actRoute: ActivatedRoute) {
    this.product_id = this.actRoute.snapshot.params.id;
  };

  ngOnInit(): void {
    // this.getOneProduct(this.product_id);
  };

}
