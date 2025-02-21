import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITunesSearchService } from '../services/i-tunes-search.service';
import { Result } from '../services/itunes-types.model';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detail-for-id',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './detail-for-id.component.html',
  styleUrl: './detail-for-id.component.scss',
  standalone: true
})
export class DetailForIdComponent {

  record: Result | undefined;

  constructor(private activeRoute: ActivatedRoute, 
    private router: Router,
    private services: ITunesSearchService
  ) {
    // This is where you can inject services and initialize variables
    // that are needed for this component.
    //console.log('ID:', id);
    let id = activeRoute.snapshot.paramMap.get('id');
    console.log('ActivatedRoute:', id);

    if (id) {
      this.services.itunesFindPodcastById(parseInt(id)).then((result) => {
        console.log('Search result:', result);
        if (result.results.length > 0) {
          this.record = result.results[0];
        }
      });
    }
  }

  navigateToParent() {
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }
}
