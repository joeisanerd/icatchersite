import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ITunesSearchService } from './itunes/services/i-tunes-search.service';
import { AppleSearchResult, AppleSearchPodcast } from './itunes/services/itunes-types.model';

export const PodcastByIdResolver: ResolveFn<AppleSearchResult> = (route, state) => {

  let service = inject(ITunesSearchService);
  return service.itunesFindPodcastById(parseInt(route.paramMap.get('id') ?? '0'));
};


export const PodcastWithEpisodesByIdResolver: ResolveFn<AppleSearchResult|null> = (route, state) => {

  let service = inject(ITunesSearchService);
  return service.itunesFindPodcastByIdWithEpisodes(
    parseInt(route.paramMap.get('id') ?? '0'),
    parseInt(route.paramMap.get('track') ?? '0')
  );
};
