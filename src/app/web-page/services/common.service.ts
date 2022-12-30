import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Author, DataFullObj, DetailUnit, Experiences, MockDatas, PersonalInformation, PlayGround } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  author: Author = {
    name: 'Nguyễn Đức Anh',
    nickName: 'Danh',
    job: 'Developer',
    startWorkYear: 2020,
    bornYear: 1997,
    selfDescriptions: 'And i would love for any new oportunities and challenges.',
  }
  personalInformation: PersonalInformation = {
    common: {
      dateOfBirth: '10/06/1997',
      gender: 'Male',
      address: 'Hanoi - Vietnam',
    },
    interests: [
      'I am interested in reading, playing game, watching movies, traveling,..',
      'I desire to work in professional environment related to IT business',
    ]
  }

  experiences: Experiences = {
    summary: {
      label: 'Experienced Software Engineer with a demonstrated history of working in the computer software industry.',
      descriptions: [
        'Most Skilled in Angular, HTML, CSS, JavaScript',
        'Also can use some of NodeJS, Java Spring and SQL.',
      ],
    },
    timeLines: [
      {
        label: 'Before 2020 - REELANCER/ PARTIME',
        descriptions: [
          `Develop small projects follow customer's requirements`,
          `Programming APIs as requirements`,
          `Writing tools, setting up server managements for different systems or games.`,
        ],
        projects: [],
      },
      {
        label: 'Mar 2020 - FPT Informations System',
        descriptions: ['Start working as intern Angular - Java Spring Boot'],
        projects: [
          {
            label: 'Project Description: Auction system',
            descriptions: [
              `This is the new bidding system for different projects that any personals, companies, organizations that want to win over and take over the project of Nation.`,
              `It also supports to online register, payment … and many ways for users to manage their assets, documents then evaluate their potential and status …`,
              `My position is Developer of User mangement Part. I created, developed and fixed features with both Front and Back-End, but mostly Front-End`,
              `I work with mailing, listing data, paginations, advance search/sort with large amount of data with supports from many library, framework as Nz zorro, NGRx store ...`,
              `Later on, i join in File storage management part which also work with uploading/downloading files with really large`,
              `Also involved in QA, UI/UX`,
            ],
          }
        ]
      },
      {
        label: 'Aug 2021 - FPT Informations System',
        descriptions: ['Comeback to finish university'],
        projects: [],
      },
      {
        label: 'Mar 2022 - SOTATEK., JSC',
        descriptions: ['Start working as Angular developer'],
        projects: [
          {
            label: 'Project Description: Game',
            descriptions: [
              `This is a webapp game project, in which we develop an game engine making games for webapps in different platforms as android, ios and desktop.`,
              `My position is Developer by Angular and Firebase cloud funcions.`,
              `Follow the requirements, i created scenes with Konvajs for many game's frames, implements localizations and also Angular Universal for SSR`,
              `I also take on role of Tester for this Project`,
            ],
          },
          {
            label: 'Project Description: Camper',
            descriptions: [
              `This is a maintaining project for a web similar to booking hotel web, in which is booking land prepared for going Camping.`,
              `My position is Developer using Angular and NodeJs with MySql.`,
              `In this Project, i have used NodeJs and Sql to create, alter system to search/sort with cordinate of map Land for Camping.`,
              `Learning methods for maintaining working Project and deploy it to Server by SSH commands ... `,
              `I also the main dev to communicate directly with customer in English.`
            ],
          }
        ],
      },
      {
        label: 'Now',
        descriptions: [],
        projects: [],
      },
    ]
  }

  education: DetailUnit = {
    label: `UNIVERSITY OF GREENWICH Alliance with FPT Education`,
    descriptions: [
      `Jul 2018 - Dec 2021`,
      `• Major: Information Technology Branch.`,
      `• BACHELOR OF SCIENCE SECOND CLASS HONOURS (1st DIVISION) awarded by University of Greenwich`,
      `• English: Upper-Intermediate (~ B2 / IELTS 6.0)`,
      `• Flexible work & communicate in English`,
    ]
  }

  contact: string[] = [
    `• Phone: 0982613181`,
    `• Email: ducanhtrs7@gmail.com`,
    `• Zalo: 0982613181`,
    `• <a href="https://www.fb.com/SHiImBiS.Sayonara">Facebook</a>`,
    `• <a href="https://github.com/HiMBixD">Github</a>`,
  ];

  playGround: PlayGround = {
    summaryDescriptions: [
      `Here are some of my old Pet Projects practicing`,
    ],
    projects: [
      {
        label: `Music Platform:`,
        descriptions: [
          `Created by using Angular with Java Spring Boot, PostgreSQL and MongoDB`,
          `An music platform that user can buy/sell music, music file uploaded to MongoDB`,
          `Front-end: <a href="https://bmwd-51455.firebaseapp.com/">Preview</a> And <a href="https://github.com/HiMBixD/MWD-FE">Git repositories</a>`,
          `Back-end: <a href="https://mwd-be.herokuapp.com/">Preview</a> And <a href="https://github.com/HiMBixD/MWD">Git repositories</a>`,
          `<img src="assets/MWDpreview.png" alt="" class="w-100">`,
        ]
      },
      {
        label: `My CV Preview:`,
        descriptions: [
          `Created by using Angular with Firebase Storage`,
          `You basicly using it right now :)`,
          `Github: <a href="https://github.com/HiMBixD/my-cv-preview">Git repositories</a>`,
        ]
      }
    ]
  }

  private mockData: BehaviorSubject<DataFullObj>;

  private readonly mockDataFinal: any = {
    vi: {
      author: this.author,
      personalInformation: this.personalInformation,
      experiences: this.experiences,
      education: this.education,
      contact: this.contact,
      playGround: this.playGround,
    },
    en: {
      author: this.author,
      personalInformation: this.personalInformation,
      experiences: this.experiences,
      education: this.education,
      contact: this.contact,
      playGround: this.playGround,
    },
  }
  browserLang;
  constructor(private translate: TranslateService) {
    this.browserLang = this.translate.getBrowserLang();
    // this.translate.setDefaultLang(this.browserLang === 'vi' ? 'vi' : 'en');
    // this.translate.use(this.browserLang === 'vi' ? 'vi' : 'en');
    // this.mockData = new BehaviorSubject<DataFullObj>(this.mockDataFinal[this.browserLang === 'vi' ? 'vi' : 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.mockData = new BehaviorSubject<DataFullObj>(this.mockDataFinal['en']);
  }

  get currentLangGet() {
    return this.translate.currentLang;
  }

  get mockDatas(): DataFullObj {
    return this.mockData.getValue();
  }

  changeData(lang: string) {
    this.translate.use(lang);
    this.mockData.next(this.mockDataFinal[lang]);
  }
}
