import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private items: any[] = [];

  addToCart(product: any) {
    const existing = this.items.find(p => p.name === product.name);

    if (existing) {
      existing.quantity++;
    } else {
      const productWithImage = {
        ...product,
        quantity: 1,
        imageUrl: product.imageUrl || 'https://via.placeholder.com/50'
      };
      this.items.push(productWithImage);
    }
  }

  getItems(): any[] {
    return this.items;
  }

  removeItem(item: any) {
    this.items = this.items.filter(p => p !== item);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}


