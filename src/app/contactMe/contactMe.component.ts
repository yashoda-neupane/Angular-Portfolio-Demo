import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactMe',
  standalone: true,
  templateUrl: './contactMe.component.html',
  styleUrls: ['./contactMe.component.css'],
})
export class ContactMeComponent {
 contactMeImage: string = '../assets/contact_me.png';
}