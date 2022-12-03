import { Component, OnInit } from '@angular/core';
import { InformationParts } from '../../shared/common.constant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  readonly partMenu = InformationParts;

  constructor() { }

  ngOnInit(): void {
  }

  getWorkedYears() {
    return new Date().getFullYear() - 2020;
  }

  getAges() {
    return new Date().getFullYear() - 1997;
  }

  scrollTo(id: string) {
    const doc = document.getElementById(id);
    if(doc){
      window.scroll(0, doc.offsetTop - 100);
    }
  }
}
