import { Inject, Injectable } from '@angular/core';
import { ItunesTypes } from './itunes-types.model';
import { mockData } from './mock-search-response.model';

@Injectable({
  providedIn: 'root'
})
export class ITunesSearchService {

  useMockData = false;
  searchTerm = '';
  response:ItunesTypes|undefined;
  
  constructor() {
    //this.searchTerm = window?.sessionStorage?.getItem('searchTerm') ?? '';
  }
  
  async search(search:string):Promise<ItunesTypes|undefined>
  {
    this.searchTerm = search;

    //sessionStorage.setItem('searchTerm', search);

    if (this.useMockData){
      this.response = structuredClone(mockData);
      return mockData;
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


  async itunesFindPodcastById(id:number):Promise<ItunesTypes>
  {
    if (this.useMockData){ 
      let retVal = structuredClone(mockData);
      retVal.results = mockData.results.filter((item) => {
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
          const result : ItunesTypes = {
            resultCount : 0,
            results: []
          };
          return result;
        });
      }
  }
}

