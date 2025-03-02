import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceComponent } from './reference.component';

@Component({
  selector: 'app-references-list',
  standalone: true,
  imports: [CommonModule, ReferenceComponent],
  template: `
    <div class="references-list">
      <h1 class="references-heading">References</h1>
      <app-reference
        *ngFor="let ref of references"
        [photo]="ref.photo"
        [name]="ref.name"
        [profession]="ref.profession"
        [referenceNote]="ref.referenceNote"
      ></app-reference>
    </div>
  `,
  styleUrls: ['./references.component.css'],
})
export class ReferencesListComponent {
  @Input() references: any[] = [];
}