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
      id: "ABCD844189035",
      name: "Tshirt",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "CDEFG15457723",
      name: "Shoes",
      description: "voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "ZXYGA87632265",
      name: "Handbags",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    }
  ];
}
