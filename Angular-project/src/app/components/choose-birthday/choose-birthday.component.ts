import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Birthday } from 'src/app/interfaces/birthday';

@Component({
  selector: 'app-choose-birthday',
  templateUrl: './choose-birthday.component.html',
  styleUrls: ['./choose-birthday.component.scss'],
})
export class ChooseBirthdayComponent {
  max_year: number = 2023;
  min_year: number = 1900;
  max_month: number = 12;
  min_month: number = 1;
  max_day: number = 31;
  min_day: number = 1;
  year_value: number = 1900;
  month_value: number = 1;
  day_value: number = 1;
  bd: Birthday = {
    year: this.year_value,
    month: this.month_value,
    day: this.day_value,
  };
  constructor(
    public dialogRef: MatDialogRef<ChooseBirthdayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.day_value = data.bd_value.getUTCMonth() + 1;
    this.month_value = data.bd_value.getUTCDate();
    this.year_value = data.bd_value.getUTCFullYear();
  }
  updateYear(year: number) {
    this.year_value = year;
    this.bd.year = year;
  }
  updateMonth(month: number) {
    this.month_value = month;
    this.bd.month = month;
  }
  updateDay(day: number) {
    this.day_value = day;
    this.bd.day = day;
  }
  closeDialog() {
    this.data.bd_value = new Date(
      this.year_value,
      this.month_value - 1,
      this.day_value
    );
    this.dialogRef.close();
  }
}
