import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Author } from '../../models/common.model';
import { CommonService } from '../../services/common.service';
import { InformationParts } from '../../shared/common.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() author: Author | undefined;
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
  constructor(private common: CommonService) {

  }

  ngOnInit(): void {
  }

  get currentLangGet() {
    return this.common.currentLangGet;
  }

  changeLang(code: string) {
    this.common.changeData(code);
  }
  scrollToItem(id: string) {
    this.scrollTo.emit(id);
  }

}
