import { Component } from "@angular/core";

@Component({
    selector: 'comp-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})

export class AsideComponent{
    currentCustomer = 'Robert';
}