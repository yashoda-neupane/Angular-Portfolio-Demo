import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [NgFor]
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 75 },
    { name: 'JAVASCRIPT', percentage: 60 },
    { name: 'SASS', percentage: 60 },
    { name: 'BOOTSTRAP', percentage: 75 },
    { name: 'PHOTOSHOP', percentage: 70 }
  ];
}