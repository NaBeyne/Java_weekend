import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { FirstNameComponent } from './components/first-name/first-name.component';
import { SurnameComponent } from './components/surname/surname.component';
import { BirthdateComponent } from './components/birthdate/birthdate.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';

import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../state/login.reducer';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    StoreModule.forRoot({ login: loginReducer }), BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
