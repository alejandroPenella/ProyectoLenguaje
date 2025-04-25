import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patrols',
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './patrols.component.html',
  styleUrl: './patrols.component.css'
})
export class PatrolsComponent {

  patrols = [
    {
      name: 'Death Guard',
      description: 'Avanza inexorable y propaga las dudosas bendiciones de Nurgle, el Dios de la Plaga, mientras conquistas la galaxia.',
      imageUrl: '/img/patrullas.jpeg',
      link: '/shop',
      color: '#000080',
    },
  ]
}
