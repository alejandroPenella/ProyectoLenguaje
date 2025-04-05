import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { ShopBannerComponent } from '../shop-banner/shop-banner.component';

@Component({
  selector: 'app-shop',
  imports: [RouterOutlet, FooterComponent, NavbarComponent,TopBarComponent,PromoBannerComponent,ShopBannerComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
