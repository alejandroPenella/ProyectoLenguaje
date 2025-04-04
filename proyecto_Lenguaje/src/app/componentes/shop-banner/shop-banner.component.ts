import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-banner',
  imports: [CommonModule],
  templateUrl: './shop-banner.component.html',
  styleUrl: './shop-banner.component.css'
})
export class ShopBannerComponent {
  imgFondo: string = "/img/81cf3b1e-e40b-42c8-a78d-c32f1025b932-profile_banner-480.png";
}
