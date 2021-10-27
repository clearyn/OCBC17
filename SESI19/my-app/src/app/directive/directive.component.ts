import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  //Structural Directive: NgIf template
  isLoggedIn = true;
  nullValue = null;
  currentUser = {username: "adida"};

  @Input() hero:any;
}
