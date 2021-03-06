import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  //Non Service (With service check product-service component)
  products = [
    {
      id: 1,
      code: "MD0001",
      name: "Tshirt",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: 100
    },
    {
      id: 2,
      code: "MD0002",
      name: "Shoes",
      description: "voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 110
    },
    {
      id: 3,
      code: "MD0003",
      name: "Handbags",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      price: 120
    }
  ];
}
