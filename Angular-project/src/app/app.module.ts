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
import {loginReducer} from "./state/login/login.reducer";
import {taskReducer} from "./state/task/task.reducer";

import {HomeComponent} from './containers/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from "@angular/common/http";
import {TasksComponent} from './components/tasks/tasks.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './components/tasks/task/task.component';
import { SubTaskComponent } from './components/tasks/task/sub-task/sub-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChooseBirthdayComponent } from './components/choose-birthday/choose-birthday.component';
import { BirthdayPickerFieldComponent } from './components/birthday-picker-field/birthday-picker-field.component';
import { MatIconModule } from '@angular/material/icon';

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
    TasksComponent,
    TaskComponent,
    SubTaskComponent,
    ChooseBirthdayComponent,
    BirthdayPickerFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ login: loginReducer, tasks: taskReducer }),
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
