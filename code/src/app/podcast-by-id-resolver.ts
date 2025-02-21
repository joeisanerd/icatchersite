import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ITunesSearchService } from './itunes/services/i-tunes-search.service';
import { ItunesTypes, Result } from './itunes/services/itunes-types.model';

export const PodcastByIdResolver: ResolveFn<ItunesTypes> = (route, state) => {

  let service = inject(ITunesSearchService);
  return service.itunesFindPodcastById(parseInt(route.paramMap.get('id') ?? '0'));
};
