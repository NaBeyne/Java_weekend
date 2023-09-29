import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBirthdayComponent } from './choose-birthday.component';

describe('ChooseBirthdayComponent', () => {
  let component: ChooseBirthdayComponent;
  let fixture: ComponentFixture<ChooseBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBirthdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
