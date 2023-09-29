import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent {
  value = 0;

  getFormattedValue(): string {
    return this.pad(this.value, 10);
  }

  pad(num: number, size: number): string {
      let numString = num.toString();
      while (numString.length < size) numString = "0" + numString;
      return numString;
  }
}
