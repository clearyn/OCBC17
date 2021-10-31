import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country'

@Component({
  selector: 'app-all-countries-component',
  templateUrl: './all-countries-component.component.html',
  styleUrls: ['./all-countries-component.component.css']
})
export class AllCountriesComponentComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countryService: CountryService) { };

  ngOnInit(): void {
    this.getCountries();
  };

  getCountries(){
    this.countryService.getCountry()
      .subscribe((countries) => (this.countries = countries));
  };

}
