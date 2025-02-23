import { Inject, Injectable } from '@angular/core';
import { AppleSearchResult, AppleSearchPodcast, AppleSearchPodcastEpisode } from './itunes-types.model';
import { mockData } from './mock-search-response.model';
import { mockPodcastWithEpisodesData } from './mock-search-response2.model';

@Injectable({
  providedIn: 'root'
})
export class ITunesSearchService {

  useMockData = true;
  searchTerm = '';
  response:AppleSearchResult|null = null;
  
  constructor() {
  }
  
  async search(search:string):Promise<AppleSearchResult|null>
  {
    this.searchTerm = search;

    if (this.useMockData){
      this.response = structuredClone(mockData);
      return this.response;
    }
    else {
      const headers = new Headers();
      headers.append("Accept","*/*");
      const request = new Request(
          `https://itunes.apple.com/search?term=${search}&entity=podcast&r=${Math.random()}`,
          {
            method: "GET",
            headers,
            mode: "cors",
            cache: 'default'
          }
      );

      this.response = await fetch(request).then(val => val.json());
      return this.response;
    }
  }


  async itunesFindPodcastById(id:number):Promise<AppleSearchResult>
  {
    if (this.useMockData){ 
      let retVal = structuredClone(mockData);
      retVal.results = retVal.results.filter((item) => {
        return item.collectionId == id;
      });  
      return retVal;
    }
    else {
      const headers = new Headers();
      headers.append("Accept","*/*");
      const url = `https://itunes.apple.com/lookup?id=${id}&r=${Math.random()}`;
      const request = new Request(
          url,
          {
            method: "GET",
            headers,
            mode: "cors",
            cache: "default"
          }
        );
        return await fetch(request).then(val => {
          return val.json();
        }).catch(function(){
          const result : AppleSearchResult = {
            resultCount : 0,
            results: []
          };
          return result;
        });
      }
  }

  convert(json:string) : [AppleSearchResult] | null {
    return null;    
  }

  async itunesFindPodcastByIdWithEpisodes(id:number, track: number|null):Promise<AppleSearchResult|null>
  {
    if (this.useMockData){ 
      let retVal = structuredClone(mockPodcastWithEpisodesData);

      if (track){
        let podcast = retVal.results.slice(0,1);
        let episodes = retVal.results.slice(1, retVal.resultCount-1);
        episodes = episodes.filter(n => n.trackId == track)
        console.log("Podcast", podcast);
        retVal.results = [...podcast,...episodes];
      }

      return retVal;
    }
    else {
      const headers = new Headers();
      headers.append("Accept","*/*");
      const url = `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`;
      const request = new Request(
          url,
          {
            method: "GET",
            headers,
            mode: "cors",
            cache: "default"
          }
        );
        return await fetch(request).then(val => {

          return val.json();
        }).catch(function(){
          const result : AppleSearchResult = {
            resultCount : 0,
            results: []
          };
          return result;
        });
      }
  }
}

