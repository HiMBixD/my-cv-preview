import { Component, OnInit } from '@angular/core';
import { CommonEnum, InformationParts } from '../../shared/common.constant';

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
    return new Date().getFullYear() - CommonEnum.startWorkYear;
  }

  getAges() {
    return new Date().getFullYear() - CommonEnum.bornYear;
  }

  scrollTo(id: string) {
    const doc = document.getElementById(id);
    if(doc){
      window.scroll(0, doc.offsetTop - 100);
    }
  }
}
