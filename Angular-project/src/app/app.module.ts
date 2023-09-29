import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './containers/login/login.component';
import {SignupComponent} from './containers/signup/signup.component';
import {FirstNameComponent} from './components/first-name/first-name.component';
import {SurnameComponent} from './components/surname/surname.component';
import {BirthdateComponent} from './components/birthdate/birthdate.component';
import {PhoneNumberComponent} from './components/phone-number/phone-number.component';

import {StoreModule} from '@ngrx/store';
import {HomeComponent} from './containers/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {loginReducer} from "./state/login/login.reducer";
import {HttpClientModule} from "@angular/common/http";
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    SignupComponent,
    FirstNameComponent,
    SurnameComponent,
    BirthdateComponent,
    PhoneNumberComponent,
    HomeComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ login: loginReducer }),
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
