import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { InputComponent } from './controls/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './controls/select/select.component';
import { PrimaryButtonComponent } from './controls/buttons/primary-button/primary-button.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { RadioButtonComponent } from './controls/radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    InputComponent,
    SelectComponent,
    PrimaryButtonComponent,
    SubHeaderComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
