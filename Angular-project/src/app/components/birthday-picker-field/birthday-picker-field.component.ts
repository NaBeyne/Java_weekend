import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-birthday-picker-field',
  templateUrl: './birthday-picker-field.component.html',
  styleUrls: ['./birthday-picker-field.component.scss'],
})
export class BirthdayPickerFieldComponent implements OnInit {
  @Input() max: number;
  @Input() min: number;
  @Input() value: number;
  @Output() newValue = new EventEmitter();
  higher_than: number;
  lower_than: number;
  ngOnInit(): void {
    this.higher_than = this.min;
    this.lower_than = this.max;
  }

  lower() {
    this.updateParentValue();
    this.lower_than = this.value;
    this.value = this.randomIntFromInterval(this.higher_than, this.lower_than);
  }
  higher() {
    this.updateParentValue();
    this.higher_than = this.value;
    this.value = this.randomIntFromInterval(this.higher_than, this.lower_than);
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  updateParentValue() {
    this.newValue.emit(this.value);
  }
}
