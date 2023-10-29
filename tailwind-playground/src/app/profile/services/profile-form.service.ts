import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileFormService {

  constructor(private fb: FormBuilder) { }

  profileForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      notifications: ['None']
    });
  }
}
