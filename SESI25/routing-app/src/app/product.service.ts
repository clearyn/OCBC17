import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/product';
import { PRODUCTS } from 'src/app/models/mock-products';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { };
  
  products = of(PRODUCTS);
  getProducts(): Observable<Products[]> {
    const products = of(PRODUCTS);
    return products;
  }

  getOneProduct(id: number): Observable<Products> {
    return this.products.pipe(map(products => products.filter(product => product.id == id)[0]))
  }
  
}
