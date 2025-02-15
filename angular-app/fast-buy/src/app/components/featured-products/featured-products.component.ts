import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts: Product[] = [];
  loading = true;
  error = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadFeaturedProducts();
  }

  private loadFeaturedProducts() {
    this.productService.getFeaturedProducts().subscribe({
      next: (products) => {
        this.featuredProducts = products;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading featured products:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  // Calculate discount price (20% off for featured products)
  getDiscountPrice(price: number): number {
    return price * 0.8; // 20% off
  }
}
