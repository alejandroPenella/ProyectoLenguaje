import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-preview',
  imports: [CommonModule],
  templateUrl: './shop-preview.component.html',
  styleUrl: './shop-preview.component.css'
})
export class ShopPreviewComponent {

  products = [
    {
      id: 1,
      name: 'Patrulla Space Marines',
      description: 'Fuerza de ataque básica lista para jugar.',
      imageUrl: '/img/patrullaMarine.jpg',
      price: 120
    },
    {
      id: 2,
      name: 'Patrulla Orkos',
      description: 'Una banda brutal de pieles verdes.',
      imageUrl: '/img/patrullaOrkos.jpg',
      price: 110
    },
    {
      id: 3,
      name: 'Patrulla Necrones',
      description: 'Enemigos eternos desde el pasado.',
      imageUrl: '/img/patrullaNecrones.jpg',
      price: 125
    }
  ];

  constructor(private router: Router) {}

  comprar(productId: number) {

    this.router.navigate(['/product', productId]);
  }

}
