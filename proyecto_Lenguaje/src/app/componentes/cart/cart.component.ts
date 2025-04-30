import { Component, OnInit } from '@angular/core';
import { CartService } from '../../servicios/cart.service';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,TopBarComponent,RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }


  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }


  getTotal(): number {
    return this.cartService.getTotal();
  }
}
