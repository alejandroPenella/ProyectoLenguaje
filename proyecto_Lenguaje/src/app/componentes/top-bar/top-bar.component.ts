import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from '../../servicios/cart.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit {
  totalItems: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.updateCartCount();
  }

  updateCartCount() {
    const items = this.cartService.getItems();
    this.totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  }
}



