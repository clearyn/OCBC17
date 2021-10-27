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
}
