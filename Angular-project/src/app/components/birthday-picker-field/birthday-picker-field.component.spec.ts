import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayPickerFieldComponent } from './birthday-picker-field.component';

describe('BirthdayPickerFieldComponent', () => {
  let component: BirthdayPickerFieldComponent;
  let fixture: ComponentFixture<BirthdayPickerFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayPickerFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayPickerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
