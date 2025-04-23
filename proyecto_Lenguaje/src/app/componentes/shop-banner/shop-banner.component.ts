import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { title } from 'process';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shop-banner',
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './shop-banner.component.html',
  styleUrl: './shop-banner.component.css'
})
export class ShopBannerComponent {
  cards = [
    {
      title: 'ASTRA MILITARUM',
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
