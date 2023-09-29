import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChooseBirthdayComponent } from '../choose-birthday/choose-birthday.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.scss'],
})
export class BirthdateComponent {
  unsubscribeSignal: Subject<void> = new Subject();
  @Input() birthdayValue: Date;
  @Output() birthday = new EventEmitter();
  constructor(public dialog: MatDialog) {}
  openNewEventDialog(): void {
    const dialogRef = this.dialog.open(ChooseBirthdayComponent, {
      data: {
        title: 'Create New',
        bd_value: this.birthdayValue,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribeSignal))
      .subscribe((result) => {
        if (result)
          this.birthdayValue = new Date(result.year, result.month, result.day);
      });
  }
}
