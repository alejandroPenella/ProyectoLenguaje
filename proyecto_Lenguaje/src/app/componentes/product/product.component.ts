import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute para acceder a los parámetros de la URL
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';


@Component({
  selector: 'app-product',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, TopBarComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  // Corrección en styleUrls
})
export class ProductComponent implements OnInit {  // El método ngOnInit debe estar dentro de la clase

  productId: number | null = null;
  product: any = {};

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
    },
    {
      id: 4,
      name: 'Roboute Guilliman',
      description: 'Primarca de los Ultramarines.',
      imageUrl: '/img/RobouteGuilliman.jpg',
      price: 55
    },
    {
      id: 5,
      name: 'Guardia de Honor de los Ultramarines',
      description: 'Contiene tres opciones de Élites para tu ejército de Marines Espaciales.',
      imageUrl: '/img/UltramarineHonorGuard.jpg',
      price: 125
    }
  ];

  constructor(private route: ActivatedRoute) {}  // Inyectamos ActivatedRoute

  ngOnInit(): void {  // Este método debe estar aquí dentro de la clase
    // Obtener el id del producto desde la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = Number(id);
      // Buscar el producto por id
      this.product = this.products.find(p => p.id === this.productId);
    }
  }
}
