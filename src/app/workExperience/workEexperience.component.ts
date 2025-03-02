import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workExperience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workExperience.component.html',
  styleUrls: ['./workExperience.component.css']
})
export class WorkExperienceComponent {
  workExperiences = [
    { start: '03/2016', end: 'Present', company: 'CREATIVEM', title: 'Front End Developer', description: 'Euromd masa...' },
    { start: '04/2014', end: '03/2016', company: 'WEBNOTE', title: 'Web Developer', description: 'Lorem ipsum...' },
    { start: '04/2013', end: '02/2014', company: 'WEBM', title: 'Intern', description: 'Integer eget...' }
  ];

  


// Convert MM/YYYY to Date Format
formatDate(dateString: string) {
    if (dateString.toLowerCase() === 'present') return 'Present'; // Handle 'Present' case
    const [month, year] = dateString.split('/'); 
    return new Date(parseInt(year), parseInt(month) - 1, 1); // Convert to Date object
  }

}