import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message = "Hi! I'm your parent."
  defaultCounter = 0;
  items: string[] = [];
  
  showMessage (message: string) {
    this.message = message
  }

  //Structural Directive
  isActive = true;
  heroes = [
    {id: 1, name: 'Dr. Nice', emotion: 'Happy'},
    {id: 2, name: 'Narco', emotion: 'sad'},
    {id: 3, name: 'Windstorm', emotion: 'confuse'},
    {id: 4, name: 'Magenta'}
  ];
  //Study Case
  people: any[] = [
    {
      "name": "Dougrlas Pace",
      "age": 18,
      "country": 'MARS'
    },
    {
      "name": "McLeod",
      "age": 20,
      "country": 'USA'
    },
    {
      "name": "Day Meyers",
      "age": 22,
      "country": 'HK'
    },
    {
      "name": "Aguierre",
      "age": 25,
      "country": 'UK'
    },
    {
      "name": "Cook Tyson",
      "age": 21,
      "country": 'USA'
    }
  ];

}
