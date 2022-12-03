import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getWorkedYears() {
    return new Date().getFullYear() - 2020;
  }

  getAges() {
    return new Date().getFullYear() - 1997;
  }
}
