import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { FeaturedProductsComponent } from '../components/featured-products/featured-products.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { SpecialOffersComponent } from '../components/special-offers/special-offers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedProductsComponent,
    CategoriesComponent,
    SpecialOffersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
