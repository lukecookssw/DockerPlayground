import { Injectable } from '@angular/core';
import { SelectOption } from 'src/app/controls/select/select.component';

@Injectable({
  providedIn: 'root'
})
export class GeographyService {

  constructor() { }


  getCountrySelectOptions(): SelectOption[] {
    return [
      { name: 'Australia', value: 'AU' },
      { name: 'New Zealand', value: 'NZ' },
    ];
  }

  getStateAndTerritorySelectOptions(country: string): SelectOption[] {
    switch(country) {
      case 'AU':
        return this.getAustralianStatesAndTerritories();
      case 'NZ':
        return this.getNewZealandStatesAndTerritories();
      default:
        return [];
    }
  }


  getAustralianStatesAndTerritories(): SelectOption[] {
    return [
      { name: 'Australian Capital Territory', value: 'ACT' },
      { name: 'New South Wales', value: 'NSW' },
      { name: 'Northern Territory', value: 'NT' },
      { name: 'Queensland', value: 'QLD' },
      { name: 'South Australia', value: 'SA' },
      { name: 'Tasmania', value: 'TAS' },
      { name: 'Victoria', value: 'VIC' },
      { name: 'Western Australia', value: 'WA' }
    ];
  }

  getNewZealandStatesAndTerritories(): SelectOption[] {
    return [
      { name: 'Auckland', value: 'AUK' },
      { name: 'Bay of Plenty', value: 'BOP' },
      { name: 'Canterbury', value: 'CAN' },
      { name: 'Gisborne', value: 'GIS' },
      { name: 'Hawke\'s Bay', value: 'HKB' },
      { name: 'Manawatu-Wanganui', value: 'MWT' },
      { name: 'Marlborough', value: 'MBH' },
      { name: 'Nelson', value: 'NSN' },
      { name: 'Northland', value: 'NTL' },
      { name: 'Otago', value: 'OTA' },
      { name: 'Southland', value: 'STL' },
      { name: 'Taranaki', value: 'TKI' },
      { name: 'Tasman', value: 'TAS' },
      { name: 'Waikato', value: 'WKO' },
      { name: 'Wellington', value: 'WGN' },
      { name: 'West Coast', value: 'WTC' }
    ];
  }
}
