export interface Author {
  name: string;
  nickName: string;
  job: string;
  startWorkYear: number;
  bornYear: number;
  selfDescriptions: string;
}

export interface CommonInformation {
  dateOfBirth: string;
  gender: string;
  address: string;
}

export interface PersonalInformation {
  common: CommonInformation;
  interests: string[];
}

export interface DetailUnit {
  label: string;
  descriptions: string[];
}

export interface TimeLine extends DetailUnit {
  projects: DetailUnit[];
}

export interface Experiences {
  summary: DetailUnit;
  timeLines: TimeLine[];
}

export interface PlayGround {
  summaryDescriptions: string[];
  projects: DetailUnit[];
}

export interface DataFullObj {
  author: Author;
  personalInformation: PersonalInformation;
  experiences: Experiences;
  education: DetailUnit;
  contact: string[];
  playGround: PlayGround;
}

export interface MockDatas {
  mockDatas: Record<string, DataFullObj>;
}
