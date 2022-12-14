import { Component, OnInit } from '@angular/core';
import { Author, DataFullObj, DetailUnit, Experiences, PersonalInformation, PlayGround } from '../../models/common.model';
import { CommonService } from '../../services/common.service';
import { InformationParts } from '../../shared/common.constant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  readonly partMenu = InformationParts;
  dataObj: DataFullObj;
  author: Author;
  personalInformation: PersonalInformation;
  experiences: Experiences;
  education: DetailUnit;
  contact: string[];
  playGround: PlayGround;
  constructor(private commonService: CommonService) {
    this.dataObj = this.commonService.mockDatas;
    this.author = this.commonService.mockDatas.author;
    this.personalInformation = this.commonService.mockDatas.personalInformation;
    this.experiences = this.commonService.mockDatas.experiences;
    this.education = this.commonService.mockDatas.education;
    this.contact = this.commonService.mockDatas.contact;
    this.playGround = this.commonService.mockDatas.playGround;
  }

  ngOnInit(): void {
  }
  get currentLangGet() {
    return this.commonService.currentLangGet;
  }

  getWorkedYears() {
    return new Date().getFullYear() - this.author.startWorkYear;
  }

  getAges() {
    return new Date().getFullYear() - this.author.bornYear;
  }

  scrollTo(id: string) {
    const doc = document.getElementById(id);
    if(doc){
      window.scroll(0, doc.offsetTop - 100);
    }
  }
}
