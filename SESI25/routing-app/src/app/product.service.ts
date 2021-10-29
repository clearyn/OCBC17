import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';
import { productService } from 'src/models/mock-products';
import { Observable, ObservedValueOf, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { };
  
  getProducts(): Observable<Product[]> {
    const products = of(productService);

    console.log("Fetched list of products....");
    return products;
  };
  
}
