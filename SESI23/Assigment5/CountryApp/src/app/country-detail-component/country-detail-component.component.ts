import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Country} from "../models/country";
import {UpperCasePipe} from "@angular/common";
import { Location } from '@angular/common'
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail-component',
  templateUrl: './country-detail-component.component.html',
  styleUrls: ['./country-detail-component.component.css']
})
export class CountryDetailComponentComponent implements OnInit {
  testId?: number;
  countryData?: Country;

  constructor(
    private route : ActivatedRoute,
    private location: Location,
    private productService: CountryService
  ) {}

  ngOnInit(): void {
    this.testId = Number(this.route.snapshot.params.id);
    this.getOneCountry(this.route.snapshot.params.id);
  }

  back(): void {
    this.location.back()
  }

  getOneCountry(id: number) {
    let country: Country;
    this.productService
      .getCountryById(id)
      .subscribe((country) => (this.countryData = country));
  }

}
