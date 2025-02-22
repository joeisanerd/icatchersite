import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITunesSearchService } from '../services/i-tunes-search.service';
import { Result } from '../services/itunes-types.model';
import { MatButtonModule } from '@angular/material/button';
import { Meta } from '@angular/platform-browser';
import {Title} from "@angular/platform-browser";

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
    private meta: Meta,
    private title:Title)
  {
    
  }
  
  ngOnInit() {
    let item = this.activeRoute.snapshot.data['item'];
    if (item && item.results.length > 0){
        this.record = item.results[0];
        
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

        this.meta.removeTag('name="twitter:player:stream:content_type"');
        this.meta.removeTag('name="twitter:player:stream"');
        this.meta.removeTag('name="twitter:player:width"');
        this.meta.removeTag('name="twitter:player:height"');
        this.meta.removeTag('name="twitter:player"');
        
        this.meta.addTags([
          { name: 'og:title', content: this.record?.collectionName || '' },
          { name: 'og:description', content: this.record?.collectionName || '' },
          { name: 'og:image', content: this.record?.artworkUrl100 || '' },
          { name: 'twitter:card', content: "player" },
          { name: 'twitter:site', content: "iCatcher.app" },
          { name: 'twitter:image', content: this.record?.artworkUrl100 || '' },
          { name: 'twitter:app:country', content: 'US' },
          { name: 'twitter:app:name:iphone', content: 'iCatcher' },
          { name: 'twitter:app:name:ipad', content: 'iCatcher' },
          { name: 'twitter:app:id:iphone', content: '414419105' },
          { name: 'twitter:app:id:ipad', content: '414419105' },

          { name: 'twitter:player', content: 'https://overcast.fm/podcasts/episode_card/543077665055933?t=0' },
          { name: 'twitter:player:height', content: '58' },
          { name: 'twitter:player:width', content: '290' },
          { name: 'twitter:player:stream', content: 'https://chrt.fm/track/138C95/prfx.byspotify.com/e/play.podtrac.com/npr-500005/ondemand.npr.org/anon.npr-mp3/npr/newscasts/2025/02/22/20250222_newscasts_long_100800.mp3?p=500005&amp;e=nsv2-1740236400000-s1-long&amp;d=280&amp;t=podcast&amp;size=4480567#t=0' },
          { name: 'twitter:player:stream:content_type', content: 'audio/mped' }   
        ], true); 
      }
  }

  navigateToParent() {
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }

  icatcherLink(id:number) {
    return `icatcher://itunes/${id}`;
  }
}

/**
 * 
  name="twitter:player" content="https://overcast.fm/podcasts/episode_card/543077665055933?t=0"/>
  name="twitter:player:width" content="290"/>
    <meta name="twitter:player:height" content="58"/>
    <meta name="twitter:player:stream" content="https://chrt.fm/track/138C95/prfx.byspotify.com/e/play.podtrac.com/npr-500005/ondemand.npr.org/anon.npr-mp3/npr/newscasts/2025/02/22/20250222_newscasts_long_100800.mp3?p=500005&amp;e=nsv2-1740236400000-s1-long&amp;d=280&amp;t=podcast&amp;size=4480567#t=0"/>
    <meta name="twitter:player:stream:content_type" content="audio/mpeg"/>

    <meta name="og:title" content="NPR News: 02-22-2025 10AM EST &mdash; NPR News Now"/>
    <meta name="og:description" content=""/>
    <meta name="og:image" content="https://public.overcast-cdn.com/art/505780?v863"/>
    <meta name="twitter:card" content="player"/>
    <meta name="twitter:site" content="@OvercastFM"/>
    <meta name="twitter:app:country" content="US"/>
    <meta name="twitter:app:name:iphone" content="Overcast"/>
    <meta name="twitter:app:name:ipad" content="Overcast"/>
    <meta name="twitter:app:id:iphone" content="888422857"/>
    <meta name="twitter:app:id:ipad" content="888422857"/>
    <meta name="twitter:app:url:iphone" content="overcast:///543077665055933"/>
    <meta name="twitter:app:url:ipad" content="overcast:///543077665055933"/>
 */