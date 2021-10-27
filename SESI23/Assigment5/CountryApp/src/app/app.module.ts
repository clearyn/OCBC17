import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CountryDetailComponentComponent } from './country-detail-component/country-detail-component.component';
import { AllCountriesComponentComponent } from './all-countries-component/all-countries-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CountryDetailComponentComponent,
    AllCountriesComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
