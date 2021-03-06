import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products-service',
  templateUrl: './products-service.component.html',
  styleUrls: ['./products-service.component.css']
})
export class ProductsServiceComponent implements OnInit {
  
  //With Service
  products: Products[] = [];

  constructor(
    private productService: ProductService 
  ){};

  ngOnInit(){
    this.getProducts();
  };

  getProducts(){
    this.productService.getProducts().subscribe(products => this.products = products);
  };

}
