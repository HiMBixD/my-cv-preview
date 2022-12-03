import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InformationParts } from '../../shared/common.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() scrollTo = new EventEmitter();
  readonly partMenu = [
    {
      name: 'Personal Info',
      value: InformationParts.personalInformation,
    },
    {
      name: 'Experiences',
      value: InformationParts.experiences,
    },
    {
      name: 'Education',
      value: InformationParts.education,
    },
    {
      name: 'Contact',
      value: InformationParts.contact,
    },
    {
      name: 'Play ground',
      value: InformationParts.playGround,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  scrollToItem(id: string) {
    this.scrollTo.emit(id);
  }

}
