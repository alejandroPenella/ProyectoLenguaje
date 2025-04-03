import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TopBarComponent } from './componentes/top-bar/top-bar.component';
import { PromoBannerComponent } from './componentes/promo-banner/promo-banner.component';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent,TopBarComponent,PromoBannerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'proyecto_Lenguaje';

  animate: boolean = true;
}
