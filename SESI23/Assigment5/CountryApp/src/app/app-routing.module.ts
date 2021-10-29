import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from "./home-component/home-component.component";
import { AllCountriesComponentComponent } from "./all-countries-component/all-countries-component.component";
import { CountryDetailComponentComponent } from "./country-detail-component/country-detail-component.component";

const routes: Routes = [
  { path: '', redirectTo: '/home-component', pathMatch: 'full'},
  { path: 'home-component', component: HomeComponentComponent },
  { path: 'all-countries-component', component: AllCountriesComponentComponent },
  { path: 'country-detail-component/:id', component: CountryDetailComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
