import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from './education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationList: Education[] = [
    {
      yearStart: '2013',
      yearEnd: '2015',
      level: "Master's Degree", 
      degree: 'Master of Information Technology',
      university: 'UNIVERSITY OF COMPUTER SCIENCE',
      description:
        'Investment or Coinvents extract. Master\'s Degree. Common private selection and application framework: Material\'s use of advanced image space tools, tracker and use for machine learning model. More than 3 acceptable parameters are obtained by the standard. Material is an animal, taking steps with low after imaging studies and genome code, available through one memory parameter. Single license file, in custom platform mapping, without application do.',
    },
    {
      yearStart: '2009',
      yearEnd: '2013',
      level: "Bachelor's Degree", 
      degree: 'Bachelor of Computer Science',
      university: 'UNIVERSITY OF COMPUTER SCIENCE',
      description:
        'Information of Artificial Intelligence. Bachelor\'s Degree. Limited technical assistance and applications. Integrated evaluation of existing artificial intelligence workspace personnel. Minor license file, in custom platform mapping, without application do.',
    },
    {
      yearStart: '2005',
      yearEnd: '2007',
      level: 'High School', 
      degree: 'Science and Mathematics',
      university: 'SCHOOL OF SECONDARAY BOARD',
      description:
        'Methods of Molecular Models. External analysis of chemical and molecular frameworks: Material\'s use of advanced image space tools, tracker and use for machine learning model. More than 3 acceptable parameters are obtained by the standard. Material is an animal, taking steps with low after imaging studies and genome code, available through one memory parameter. Single license file, in custom platform mapping, without application do.',
    },
  ];
}