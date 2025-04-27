import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
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
    CommonModule, // Add CommonModule here
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
    this.activeDropdown = section; // Set the active dropdown to the hovered section
  }

  hideDropdown(): void {
    this.activeDropdown = null; // Reset the active dropdown when the mouse leaves
  }

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
      name: 'Roboute Guilliman',
      description: 'Primarca de los Ultramarines.',
      imageUrl: '/img/RobouteGuilliman.jpg',
      price: 55
    },
    {
      id: 3,
      name: 'Guardia de Honor de los Ultramarines',
      description: 'Contiene tres opciones de Élites para tu ejército de Marines Espaciales.',
      imageUrl: '/img/UltramarineHonorGuard.jpg',
      price: 125
    }
  ];

  constructor(private router: Router) {}

  comprar(productId: number) {

    this.router.navigate(['/product', productId]);
  }


  cards = [
    {
      title: 'MARINES ESPACIALES',
      description:'Avanza implacable en defensa de la humanidad.',
      imgUrl: '/img/81cf3b1e-e40b-42c8-a78d-c32f1025b932-profile_banner-480.png',
      buttonText:'EXPLORA LA GAMA',
      buttonLink:'/home',
    },
    {

    }
  ]

  imgFondo: string = "/img/81cf3b1e-e40b-42c8-a78d-c32f1025b932-profile_banner-480.png";
}
