import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card-faction',
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './card-faction.component.html',
  styleUrl: './card-faction.component.css'
})
export class CardFactionComponent {
  factions = [
    {
      name: 'Death Guard',
      description: 'Avanza inexorable y propaga las dudosas bendiciones de Nurgle, el Dios de la Plaga, mientras conquistas la galaxia.',
      imageUrl: '/img/deadGuard.jpg',
      link: '/shop',
      color: '#908229',
    },
    {
      name: 'Emperors Childen',
      description: 'Jura lealtad a Shaanesh, el dios del Exceso, y súmate a la búsqueda de la perfección  ',
      imageUrl: '/img/Emperors-Children.jpg',
      link: '/shop',
      color: '#A020F0',
    
    },
    {
      name: 'Thousan Sons',
      description: 'Alcanza un pacto con Tzeentch, el Dios del cambio y conviértete en maestro de la hechicería ',
      imageUrl: '/img/thousand_sons.jpg',
      link: '/shop',
      color: '#79D2E6',
    },

    {
      name: 'Worl Eaters',
      description: 'Entrégate a Khome, el Dios de la sangre, y lanzate al combate con la furia berserkér de sus enajedados guerreros.',
      imageUrl: '/img/worl_Eaters.jpg',
      link: '/shop',
      color: '#FF6961',
    }
  ];
}
