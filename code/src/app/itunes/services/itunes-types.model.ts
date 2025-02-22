
export interface AppleSearchResult {
    resultCount: number,
    results: Array<AppleSearchPodcast|AppleSearchPodcastEpisode>
  }
  export interface AppleSearchPodcast {
    wrapperType:            string;
    kind:                   string;
    artistId?:              number;
    collectionId:           number;
    trackId:                number;
    artistName:             string;
    collectionName:         string;
    trackName:              string;
    collectionCensoredName: string;
    trackCensoredName:      string;
    artistViewUrl?:         string;
    collectionViewUrl:      string;
    feedUrl:                string;
    trackViewUrl:           string;
    artworkUrl30:           string;
    artworkUrl60:           string;
    artworkUrl100:          string;
    collectionPrice:        number;
    trackPrice:             number;
    collectionHdPrice:      number;
    releaseDate:            string;
    collectionExplicitness: string;
    trackExplicitness:      string;
    trackCount:             number;
    trackTimeMillis?:       number;
    country:                string;
    currency:               string;
    primaryGenreName:       string;
    contentAdvisoryRating?: string;
    artworkUrl600:          string;
    genreIds:               string[];
    genres:                 string[];
}


export interface AppleSearchPodcastEpisode {
    previewUrl: string;
    episodeUrl: string;
    artistIds: any[];
    artworkUrl600: string;
    artworkUrl160: string;
    episodeFileExtension: string;
    episodeContentType: string;
    episodeGuid: string;
    trackId: number;
    trackName: string;
    releaseDate: string;
    shortDescription: string;
    feedUrl: string;
    closedCaptioning: string;
    collectionId: number;
    collectionName: string;
    kind: string;
    wrapperType: string;
    description: string;
    country: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    artworkUrl60: string;
    trackTimeMillis: number;
    contentAdvisoryRating: string;
    genres: {
      name: string;
      id: string;
    }[];
  }
  