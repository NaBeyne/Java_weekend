import { Component } from '@angular/core';
import { Birthday } from 'src/app/interfaces/birthday';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  birthday: Date = new Date(1912, 3, 15);
  newYear: number;
  newMonth: number;
  newDay: number;
  updateYear(year: number) {
    this.newYear = year;
  }
  updateMonth(month: number) {
    this.newMonth = month;
  }
  updateDay(day: number) {
    this.newDay = day;
  }
}
