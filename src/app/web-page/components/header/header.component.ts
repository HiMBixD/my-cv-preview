import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Author } from '../../models/common.model';
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
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.translate.getBrowserLang() === 'vi' ? 'vi' : 'en');
    this.translate.use(this.translate.getBrowserLang() === 'vi' ? 'vi' : 'en');
  }

  ngOnInit(): void {
  }

  get currentLangGet() {
    return this.translate.currentLang;
  }

  changeLang(code: string) {
    this.translate.use(code);
  }
  scrollToItem(id: string) {
    this.scrollTo.emit(id);
  }

}
