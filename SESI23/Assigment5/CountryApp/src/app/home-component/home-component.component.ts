import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country'
import {DecimalPipe} from "@angular/common";
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  
  countries: Country[] = [];
  mostPopulated: Country[] = [];
  threeLargest: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
    this.mostPopulated = this.getThreeMostPopulatedCountries(this.countries);
    this.threeLargest = this.getThreeLargestCountries(this.countries);
  }

  getCountries() {
    this.countryService.getCountry()
      .subscribe((countries) => (this.countries = countries));
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
