import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITunesSearchService } from '../services/i-tunes-search.service';
import { Result } from '../services/itunes-types.model';
import { MatButtonModule } from '@angular/material/button';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-for-id',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './detail-for-id.component.html',
  styleUrl: './detail-for-id.component.scss',
  standalone: true
})
export class DetailForIdComponent {

  record: Result | null = null;

  constructor(private activeRoute: ActivatedRoute, 
    private router: Router,
    private services: ITunesSearchService,
    private meta: Meta)
  {
    
  }
  
  ngOnInit() {
    this.activeRoute.data.subscribe((data) => {
      console.log('Search result:', data);
      if (data['item'] && data['item'].results.length > 0) {
        this.record = data['item'].results[0];
        
        this.meta.removeTag('name="og:title"');
        this.meta.removeTag('name="og:image"');
        
        this.meta.addTags([
          { name: 'og:title', content: this.record?.collectionName || '' },
          { name: 'og:image', content: this.record?.artworkUrl100 || '' },
        ], true);
      }
      
    });
  }

  navigateToParent() {
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }

  icatcherLink(id:number) {
    return `icatcher://itunes/${id}`;
  }
}
