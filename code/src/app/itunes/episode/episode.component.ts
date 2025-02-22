import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ITunesSearchService } from '../services/i-tunes-search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppleSearchResult, AppleSearchPodcast, AppleSearchPodcastEpisode } from '../services/itunes-types.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episode',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit {

  record: AppleSearchPodcast | null = null;
  episode:AppleSearchPodcastEpisode|null = null;
  item: AppleSearchResult | null = null;

  constructor(private activeRoute: ActivatedRoute, 
    private router: Router,
    private services: ITunesSearchService,
    private meta: Meta,
    private title:Title)
  {
    
  }
  
  ngOnInit() {
    this.item = this.activeRoute.snapshot.data['item'];

    if (this.item && this.item.results.length > 0){
        this.record = this.item.results[0] as AppleSearchPodcast;
        
        console.log(this.item.results.length);
        if (this.item.results.length > 1){
          this.episode = this.item.results[1] as AppleSearchPodcastEpisode;
        }
        this.title.setTitle(this.record?.collectionName ?? "iCatcher! Podcast Player");

        this.meta.removeTag('name="og:title"');
        this.meta.removeTag('name="og:image"');
        this.meta.removeTag('name="og:description"');
        this.meta.removeTag('name="twitter:card"');
        this.meta.removeTag('name="twitter:site"');
        this.meta.removeTag('name="twitter:image"');
        this.meta.removeTag('name="twitter:app:country"');
        this.meta.removeTag('name="twitter:app:name:iphone"');
        this.meta.removeTag('name="twitter:app:name:ipad"');
        this.meta.removeTag('name="twitter:app:id:iphone"');
        this.meta.removeTag('name="twitter:app:id:ipad"');
        
        this.meta.addTags([
          { name: 'og:title', content: this.record?.collectionName || '' },
          { name: 'og:description', content: this.record?.collectionName || '' },
          { name: 'og:image', content: this.record?.artworkUrl100 || '' },
          { name: 'twitter:card', content: "player" },
          { name: 'twitter:site', content: "@joeisanerd" },
          { name: 'twitter:app:country', content: 'US' },
          { name: 'twitter:app:name:iphone', content: 'iCatcher' },
          { name: 'twitter:app:name:ipad', content: 'iCatcher' },
          { name: 'twitter:app:id:iphone', content: '414419105' },
          { name: 'twitter:app:id:ipad', content: '414419105' }
        ], true); 

        this.meta.removeTag('name="twitter:player:stream:content_type"');
        this.meta.removeTag('name="twitter:player:stream"');
        this.meta.removeTag('name="twitter:player:width"');
        this.meta.removeTag('name="twitter:player:height"');
        this.meta.removeTag('name="twitter:player"');

        if (this.episode){
          this.meta.addTags([
            { name: 'twitter:image', content: this.episode.artworkUrl600 || '' },
            { name: 'twitter:player', content: `https://icatcher.app/player.html` },
            { name: 'twitter:player:height', content: '58' },
            { name: 'twitter:player:width', content: '290' },
            { name: 'twitter:player:stream', content: this.episode.previewUrl ?? ""},
            { name: 'twitter:player:stream:content_type', content: 'audio/mpeg' }
          ], true);
        }
      
        
      }
  }

  stringify(episode:AppleSearchPodcastEpisode) : string {
    return JSON.stringify(episode);
  }
}
