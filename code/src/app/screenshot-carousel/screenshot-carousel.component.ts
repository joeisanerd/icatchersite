import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-screenshot-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './screenshot-carousel.component.html',
  styleUrls: ['./screenshot-carousel.component.scss']
})
export class ScreenshotCarouselComponent {
  screenshotUrls: string[] = [];
  currentIndex = 0;
  loading = true;

  constructor(private http: HttpClient) {
    this.http.get<any>('assets/screenshots/screenshots.json').subscribe(data => {
      this.screenshotUrls = data.results?.[0]?.screenshotUrls || [];
      this.loading = false;
      console.log('Loaded screenshots:', this.screenshotUrls);
    });
  }

  prev() {
    if (this.screenshotUrls.length) {
      this.currentIndex = (this.currentIndex - 1 + this.screenshotUrls.length) % this.screenshotUrls.length;
    }
  }

  next() {
    if (this.screenshotUrls.length) {
      this.currentIndex = (this.currentIndex + 1) % this.screenshotUrls.length;
    }
  }
}
