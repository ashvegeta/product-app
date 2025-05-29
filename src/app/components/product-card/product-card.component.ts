import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>(); // notifies parent component when product is added to cart

  onAddToCart(): void {
    this.addToCart.emit(this.product);
    console.log(
      `Product added to cart : ${this.product.Name} (child emitted event)`
    );
  }
}
