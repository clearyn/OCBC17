import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/product';
import { PRODUCTS } from 'src/app/models/mock-products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Products = {} as Products;
  product_id: number;
  productService: ProductService;

  constructor(private actRoute: ActivatedRoute, ProductService: ProductService) {
    this.product_id = this.actRoute.snapshot.params.id;
    this.productService = ProductService;
  }
  
  ngOnInit(): void {
    this.getOneProduct(this.product_id)
  }

  getOneProduct(id: number) {
    this.productService.getOneProduct(id).subscribe(p => this.product = p)
  }

}
