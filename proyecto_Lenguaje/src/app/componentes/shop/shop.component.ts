import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { ShopBannerComponent } from '../shop-banner/shop-banner.component';
import { PatrolsComponent } from "../patrols/patrols.component";
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-shop',
  imports: [
    CommonModule, // Add CommonModule here
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    TopBarComponent,
    PromoBannerComponent,
    ShopBannerComponent,
    PatrolsComponent,
    ProductComponent
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
}
