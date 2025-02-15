import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {
  @Input() productId: number | undefined;
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      feedback: ['', [Validators.required, Validators.minLength(10)]],
      starRating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      const review = {
        userName: this.reviewForm.get('userName')?.value,
        feedback: this.reviewForm.get('feedback')?.value,
        starRating: this.reviewForm.get('starRating')?.value,
        productId: this.productId
      };
      
      console.log('Review submitted:', review);
      this.reviewForm.reset();
    }
  }
}
