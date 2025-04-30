import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute para acceder a los parámetros de la URL
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { CartService } from '../../servicios/cart.service';


@Component({
  selector: 'app-product',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, TopBarComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  
})
export class ProductComponent implements OnInit {  

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
    },
    {
      id: 6,
      name: 'Patrulla de las adeptasSoritas',
      description: 'Las Hermana de Batalla componen la mayoría de todas las Órdenes Militantes de las Adepta Sororitas.',
      imageUrl: '/img/patrullaAdepta.jpg',
      price: 125,
      faction: 'Adepta Sororitas'
    },
    {
      id: 7,
      name: 'Sisters of Battle',
      description: 'Cada Battle Sister es una huérfana criada desde el nacimiento por la Schola Progenium.',
      imageUrl: '/img/adeptaSoritas.jpg',
      price: 125,
      faction: 'Adepta Sororitas'
    },
    {
      id: 8,
      name: 'tribunal',
      description: 'Dondequiera que marche el Triumph of Saint Katherine brilla el resplandor del Emperador.',
      imageUrl: '/img/tribunal.jpg',
      price: 125,
      faction: 'Adepta Sororitas'
    }
  ];

  constructor(private route: ActivatedRoute,private cartService: CartService) {}  

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {  
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = Number(id);
      this.product = this.products.find(p => p.id === this.productId);
    }
  }
}
