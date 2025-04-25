import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-preview',
  imports: [CommonModule],
  templateUrl: './shop-preview.component.html',
  styleUrl: './shop-preview.component.css'
})
export class ShopPreviewComponent {

  products = [
    {
      name: 'Patrulla Space Marines',
      description: 'Fuerza de ataque básica lista para jugar.',
      imageUrl: 'assets/img/spacemarines.jpg',
      price: 120
    },
    {
      name: 'Patrulla Orkos',
      description: 'Una banda brutal de pieles verdes.',
      imageUrl: 'assets/img/orkos.jpg',
      price: 110
    },
    {
      name: 'Patrulla Necrones',
      description: 'Enemigos eternos desde el pasado.',
      imageUrl: 'assets/img/necrones.jpg',
      price: 125
    }
  ];

}
