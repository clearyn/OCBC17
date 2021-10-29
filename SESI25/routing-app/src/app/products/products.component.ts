import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //Non Service 

  // products = [
  //   {
  //     id: "ABCD844189035",
  //     name: "Tshirt",
  //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  //   {
  //     id: "CDEFG15457723",
  //     name: "Shoes",
  //     description: "voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   },
  //   {
  //     id: "ZXYGA87632265",
  //     name: "Handbags",
  //     description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  //   }
  // ];

  //With Service

  products: Product[] = [];

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
