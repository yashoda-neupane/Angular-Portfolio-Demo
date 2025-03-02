import { Component } from '@angular/core';
import { ProfileSummaryComponent} from './profileSummary/profileSummary.component';
import { NavBarComponent } from './navBar/navBar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portFolio/portfolio.component';
import { WorkExperienceComponent } from './workExperience/workEexperience.component';
import { EducationComponent } from './education/education.component';
import { ReferencesListComponent } from './references/references.component';
import { ContactMeComponent } from './contactMe/contactMe.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, ProfileSummaryComponent,AboutComponent, SkillsComponent, PortfolioComponent, WorkExperienceComponent, EducationComponent, ReferencesListComponent,ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-cv-app';
  references = [
    {
      photo: '../assets/reference1.png',
      name: 'Alexander',
      profession: 'CEO / WEBNOTE',
      referenceNote:'Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisi nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.',
    }
  ];
  
}
