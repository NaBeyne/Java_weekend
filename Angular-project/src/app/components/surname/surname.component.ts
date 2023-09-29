import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-surname',
  templateUrl: './surname.component.html',
  styleUrls: ['./surname.component.scss'],
})
export class SurnameComponent implements OnInit, OnDestroy {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  currentLetter = '';
  surname = '';
  subscription: Subscription;
  pauze = false;
  btnLabel = 'New letter';

  ngOnInit(): void {
    this.randomLetter();
  }

  startOrPauze(): void {
    if (!this.pauze) this.startRandom();
    else this.pauzeRandom();
  }

  startRandom(): void {
    this.subscription = interval(50).subscribe(() => this.randomLetter());
    this.pauze = true;
    this.btnLabel = 'Pauze';
  }

  pauzeRandom(): void {
    this.subscription.unsubscribe();
    this.pauze = false;
    this.btnLabel = 'New letter';
  }

  randomLetter(): void {
    this.currentLetter = this.letters.charAt(
      Math.floor(Math.random() * this.letters.length)
    );
  }

  addToName(): void {
    this.surname += this.currentLetter;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
