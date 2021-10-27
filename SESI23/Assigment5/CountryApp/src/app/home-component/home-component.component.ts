import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country'
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  
  //Parent->Child
  @Input() country = Country;

  constructor() { }

  ngOnInit(): void {
  }

}
