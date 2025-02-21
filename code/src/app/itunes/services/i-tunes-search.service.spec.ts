import { TestBed } from '@angular/core/testing';

import { ITunesSearchService } from './i-tunes-search.service';

describe('ITunesSearchService', () => {
  let service: ITunesSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ITunesSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
