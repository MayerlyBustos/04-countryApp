import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countryService: CountryService){}

  public searchByCountry( term: string): void{
    this.countryService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
