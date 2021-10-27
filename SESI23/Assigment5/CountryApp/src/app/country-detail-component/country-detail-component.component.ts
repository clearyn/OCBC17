import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Country} from "../country";

@Component({
  selector: 'app-country-detail-component',
  templateUrl: './country-detail-component.component.html',
  styleUrls: ['./country-detail-component.component.css']
})
export class CountryDetailComponentComponent implements OnInit {
  testId?: number;
  countryData?: Country;

  constructor(
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.testId = Number(this.route.snapshot.paramMap.get("id"));
    this.countryData = Country[
      Number(this.route.snapshot.paramMap.get("id"))
    ];
  }

}
