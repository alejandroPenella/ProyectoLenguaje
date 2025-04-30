import { Component, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    NavbarComponent,
    TopBarComponent
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  activeDropdown: string | null = null;
  selectedCategory: string | null = null;
  dropdownItems: any[] = [];

  dropdownData = {
    chaos: [
      { name: 'Daemons del Chaos', link: '/shop/chaos/daemons' },
      { name: 'Caballeros del Chaos', link: '/shop/chaos/knights' },
      { name: 'Marines Espaciales del Chaos', link: '/shop/chaos/marines' },
      { name: 'Death Guard', link: '/shop/chaos/death-guard' },
      { name: 'Emperors Children', link: '/shop/chaos/emperors-children' },
      { name: 'Thousand Sons', link: '/shop/chaos/thousand-sons' },
      { name: 'World Eaters', link: '/shop/chaos/world-eaters' }
    ],
    imperium: [
      { name: 'Marines Espaciales', link: '/shop/imperium/marines' },
      { name: 'Adepta Sororitas', link: '/shop/imperium/sororitas' },
      { name: 'Adeptus Custodes', link: '/shop/imperium/custodes' },
      { name: 'Adeptus Mechanicus', link: '/shop/imperium/mechanicus' },
      { name: 'Astra Militarum', link: '/shop/imperium/militarum' },
      { name: 'Caballeros Imperiales', link: '/shop/imperium/knights' },
      { name: 'Agentes Imperiales', link: '/shop/imperium/agents' }
    ],
    xenos: [
      { name: 'Aeldari', link: '/shop/xenos/aeldari' },
      { name: 'Drukhari', link: '/shop/xenos/drukhari' },
      { name: 'Cultos Genestealer', link: '/shop/xenos/genestealer-cults' },
      { name: 'Leagues of Votann', link: '/shop/xenos/votann' },
      { name: 'Necrones', link: '/shop/xenos/necrons' },
      { name: 'Orkos', link: '/shop/xenos/orks' },
      { name: 'Imperio Tau', link: '/shop/xenos/tau' },
      { name: 'Tiránidos', link: '/shop/xenos/tyranids' }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the category from the URL
    const category = this.route.snapshot.paramMap.get('category') as keyof typeof this.dropdownData;
    if (category && this.dropdownData[category]) {
      this.selectedCategory = category;
      this.dropdownItems = this.dropdownData[category]; // Set the items for the selected category
    }
  }

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
}
