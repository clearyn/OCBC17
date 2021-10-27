import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country'

@Component({
  selector: 'app-all-countries-component',
  templateUrl: './all-countries-component.component.html',
  styleUrls: ['./all-countries-component.component.css']
})
export class AllCountriesComponentComponent implements OnInit {

  //Parent->Child
  @Input() country = Country;

  constructor() { }

  ngOnInit(): void {
  }

}
