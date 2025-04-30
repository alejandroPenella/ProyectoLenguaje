import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { ShopBannerComponent } from '../shop-banner/shop-banner.component';
import { PatrolsComponent } from "../patrols/patrols.component";
import { ProductComponent } from "../product/product.component";
import { Router } from '@angular/router';
import { ShopPreviewComponent } from "../shop-preview/shop-preview.component";

@Component({
  selector: 'app-shop',
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    NavbarComponent,
    TopBarComponent,
    PromoBannerComponent,
    ShopBannerComponent,
    PatrolsComponent,
    ProductComponent,
    ShopPreviewComponent
],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  activeDropdown: string | null = null;

  showDropdown(section: string): void {
    this.activeDropdown = section; 
  }

  hideDropdown(): void {
    this.activeDropdown = null; 
  }

  products = [
    {
      id: 1,
      name: 'Patrulla Space Marines',
      description: 'Fuerza de ataque básica lista para jugar.',
      imageUrl: '/img/patrullaMarine.jpg',
      price: 120,
      faction: 'Marines Espaciales'
    },
    {
      id: 4,
      name: 'Roboute Guilliman',
      description: 'Primarca de los Ultramarines.',
      imageUrl: '/img/RobouteGuilliman.jpg',
      price: 55,
      faction: 'Marines Espaciales'
    },
    {
      id: 5,
      name: 'Guardia de Honor de los Ultramarines',
      description: 'Contiene tres opciones de Élites para tu ejército de Marines Espaciales.',
      imageUrl: '/img/UltramarineHonorGuard.jpg',
      price: 125,
      faction: 'Marines Espaciales'
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


  filteredProducts: any[] = [];

  ngOnInit(): void {
    // Inicia mostrando todos los productos
    this.filteredProducts = this.products;
  }

  filterByFaction(faction: string) {

    if (faction === 'todos') {
      this.filteredProducts = this.products;  // Mostrar todos los productos
    } else {
      this.filteredProducts = this.products.filter(product => product.faction === faction);
    }
  }

  constructor(private router: Router) {}

  comprar(productId: number) {

    this.router.navigate(['/product', productId]);
  }


  cards = [
    {
      title: 'MARINES ESPACIALES',
      description:'Marcha por Macragge con los nobles parangones de las enseñanzas de Guilliman.',
      imgUrl: '/img/SpaceMarinesCover.jpg',
    },
    {

    }
  ]

  imgFondo: string = "/img/81cf3b1e-e40b-42c8-a78d-c32f1025b932-profile_banner-480.png";
}
