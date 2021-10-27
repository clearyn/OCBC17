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

  mostPopulated: Country[] = [];
  threeLargest: Country[] = [];

  constructor() { }

  ngOnInit(): void {
    this.mostPopulated = this.getThreeMostPopulatedCountries(this.country);
    this.threeLargest = this.getThreeLargestCountries(this.country);
  }

  getThreeMostPopulatedCountries(country: Country[]){
    return country.sort((a, b) => b.population - a.population)
    .slice(0, 3)
  }

  getThreeLargestCountries(country: Country[]){
    return country.sort((a, b) => b.area - a.area)
    .slice(0, 3)
  }

}
