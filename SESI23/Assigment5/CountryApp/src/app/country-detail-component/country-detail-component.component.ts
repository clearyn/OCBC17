import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Country} from "../country";
import {UpperCasePipe} from "@angular/common";
import { Location } from '@angular/common'

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
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.testId = Number(this.route.snapshot.paramMap.get("id"));
    this.countryData = Country[
      Number(this.route.snapshot.paramMap.get("id")) -1
    ];
  }

  back(): void {
    this.location.back()
  }

}
