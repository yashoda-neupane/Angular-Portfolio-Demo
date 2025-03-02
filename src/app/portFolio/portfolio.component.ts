import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    images: string[] = [
        'assets/image_portFolio1.jpg',
        'assets/image_portFolio2.jpg',
        'assets/image_portFolio3.jpg',
        'assets/image_portFolio4.jpg'
      ];
}