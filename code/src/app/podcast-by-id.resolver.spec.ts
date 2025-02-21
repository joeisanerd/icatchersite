import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { PodcastByIdResolver } from './podcast-by-id-resolver';

describe('PodcastByIdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => PodcastByIdResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
