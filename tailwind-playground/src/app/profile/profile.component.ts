import { Component, OnInit } from '@angular/core';
import { ProfileFormService } from './services/profile-form.service';
import { FormGroup } from '@angular/forms';
import { GeographyService } from './services/geography.service';
import { SelectOption } from '../controls/select/select.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;

  countries: SelectOption[] = [];
  statesAndTerritories: SelectOption[] = [];

  constructor(
    private formService: ProfileFormService,
    private geographyService: GeographyService) { }


  ngOnInit(): void {
    this.profileForm = this.formService.profileForm();
    this.countries = this.geographyService.getCountrySelectOptions();
    this.profileForm.get('country')?.valueChanges.subscribe((country: string) => {
      this.profileForm.get('state')?.patchValue('');
      this.statesAndTerritories = this.geographyService.getStateAndTerritorySelectOptions(country);
    });
  }

  onSubmit() {
    console.log('submit');
    console.log(this.profileForm.value);
  }
}
