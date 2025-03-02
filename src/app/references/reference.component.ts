import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  template: `
     <div class="reference">
      <div class="reference-left">
        <img [src]="photo" [alt]="name" class="reference-photo" />
        <div class="reference-info">
          <h3 class="reference-name">{{ name }}</h3>
          <p class="reference-profession">{{ profession }}</p>
        </div>
      </div>
      <p class="reference-note">{{ referenceNote }}</p>
    </div>
  `,
  styleUrls: ['./references.component.css'],
})
export class ReferenceComponent {
  @Input() photo: string = '';
  @Input() name: string = '';
  @Input() profession: string = '';
  @Input() referenceNote: string = '';
}