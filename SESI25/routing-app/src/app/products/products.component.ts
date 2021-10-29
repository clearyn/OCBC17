import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: "ABCD844189035",
      nama: "Tshirt",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "CDEFG15457723",
      nama: "Shoes",
      description: "voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "ZXYGA87632265",
      nama: "Handbags",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    }
  ]
    
}
