import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surname',
  templateUrl: './surname.component.html',
  styleUrls: ['./surname.component.scss'],
})
export class SurnameComponent implements OnInit {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  currentLetter = '';
  surname = '';

  ngOnInit(): void {
    this.randomLetter();
  }

  randomLetter(): void {
    this.currentLetter = this.letters.charAt(
      Math.floor(Math.random() * this.letters.length)
    );
  }

  addToName(): void {
    this.surname += this.currentLetter;
  }
}
