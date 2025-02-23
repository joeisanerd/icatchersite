import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITunesSearchService } from './services/i-tunes-search.service';
import { AppleSearchPodcast, AppleSearchPodcastEpisode, AppleSearchResult } from './services/itunes-types.model';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ContentCardComponent } from "../content-card/content-card.component";

@Component({
  selector: 'app-itunes',
  imports: [CommonModule, FormsModule,
    RouterLink, MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule, ContentCardComponent,
    ContentCardComponent],
  templateUrl: './itunes.component.html',
  styleUrl: './itunes.component.scss',
  standalone: true
})
export class ItunesComponent implements OnInit, AfterViewInit {

  results: (AppleSearchPodcast)[] = []
  searchTerm = new FormControl('');

  @ViewChild('searchInput') searchInput: ElementRef|undefined;

  
  constructor(private service: ITunesSearchService) {
    // This is where you can inject services and initialize variables
    // that are needed for this component.

    if (this.service.searchTerm.length > 0){
      this.searchTerm.setValue(this.service.searchTerm);
    }
    if (this.service.response != null){
      console.log('Search result:', this.service.response);
      this.results = (this.service.response?.results ?? []) as AppleSearchPodcast[];
    }
  }

  ngOnInit(): void {
    // This is where you can initialize any data or call services
    // to fetch data needed for this component. 
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.searchInput?.nativeElement.focus();
    }, 200);
    
  }

  onSearch():void {
    console.log('Search term:', this.searchTerm);
    this.service.search(this.searchTerm.value || '').then((result) => {
      console.log('Search result:', result);
      this.results = (result?.results ?? []) as AppleSearchPodcast[];
    });
  }

  clearSearch():void {
    this.searchTerm.setValue('');

  }
  // navigateToDetails(id: number) {
  //   this.router.navigate(['/itunes', id]);
  // }

  
}
