import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Offer {
  title: string;
  description: string;
  buttonText: string;
}

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-offers.component.html',
  styleUrl: './special-offers.component.scss'
})
export class SpecialOffersComponent {
  offers: Offer[] = [
    {
      title: 'New User Special',
      description: 'Get 10% off on your first purchase',
      buttonText: 'Claim Now'
    },
    {
      title: 'Free Shipping',
      description: 'On orders above $50',
      buttonText: 'Shop Now'
    }
  ];
}
