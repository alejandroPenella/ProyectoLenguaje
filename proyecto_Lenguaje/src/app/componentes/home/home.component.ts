import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { ShopBannerComponent } from '../shop-banner/shop-banner.component';
import { CardFactionComponent } from '../card-faction/card-faction.component';
import { PatrolsComponent } from '../patrols/patrols.component';
import { ShopPreviewComponent } from '../shop-preview/shop-preview.component';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet, FooterComponent, NavbarComponent,TopBarComponent,PromoBannerComponent,
    ShopBannerComponent,CardFactionComponent,PatrolsComponent,ShopPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
