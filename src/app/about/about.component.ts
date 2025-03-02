import { Component, Input } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name: string = '';
  profession: string = '';
  description: string = '';
  learnMoreLink: string = '';
  basicInfo: any = {};

  constructor(private aboutService: AboutService) {
    const data = this.aboutService.getAboutData();
    this.name = data.name;
    this.profession = data.profession;
    this.description = data.description;
    this.learnMoreLink = data.learnMoreLink;
    this.basicInfo = data.basicInfo;
  }
}