import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

interface CategoryWithIcon {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categories: CategoryWithIcon[] = [];
  loading = true;
  error = false;

  // Map of category names to icons
  private categoryIcons: { [key: string]: string } = {
    "electronics": "💻",
    "jewelery": "💍",
    "men's clothing": "👔",
    "women's clothing": "👗"
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadCategories();
  }

  private loadCategories() {
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories.map(category => ({
          name: category,
          icon: this.categoryIcons[category] || '🛍️' // Default icon if not found
        }));
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }
}
