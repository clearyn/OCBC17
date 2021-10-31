import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './models/country';
import { COUNTRIES } from './models/mock-country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries = of(COUNTRIES);
  constructor() {}

  getCountry(): Observable<Country[]> {
    return this.countries;
  }

  getCountryById(id: number): Observable<Country> {
    return this.countries.pipe(map((countries) => countries.filter((country) => country.id == id)[0]));
  }
}
