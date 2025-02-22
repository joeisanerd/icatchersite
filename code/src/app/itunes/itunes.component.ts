import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITunesSearchService } from './services/i-tunes-search.service';
import { AppleSearchPodcast, AppleSearchPodcastEpisode, AppleSearchResult } from './services/itunes-types.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-itunes',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './itunes.component.html',
  styleUrl: './itunes.component.scss',
  standalone: true
})
export class ItunesComponent implements OnInit {

  results: (AppleSearchPodcast)[] = []
  searchTerm: string = '';

  constructor(private service: ITunesSearchService) {
    // This is where you can inject services and initialize variables
    // that are needed for this component.

    if (this.service.searchTerm.length > 0){
      this.searchTerm = this.service.searchTerm;
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

  onSearch() {
    console.log('Search term:', this.searchTerm);
    this.service.search(this.searchTerm).then((result) => {
      console.log('Search result:', result);
      this.results = (result?.results ?? []) as AppleSearchPodcast[];
    });
  }

  // navigateToDetails(id: number) {
  //   this.router.navigate(['/itunes', id]);
  // }

  
}
