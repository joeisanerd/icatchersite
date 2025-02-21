
export interface ItunesTypes {
    resultCount: number,
    results: Array<Result>
  }
//   export interface Result {
//     collectionName: string,
//     album: string,
//     collectionPrice: number,
//     artworkUrl30: string,
//     artworkUrl100: string,
//     artworkUrl600: string,
//     artistName: string,
//     collectionId: number
//   }
  export interface Result {
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

export enum Explicitness {
    Cleaned = "cleaned",
    Explicit = "explicit",
    NotExplicit = "notExplicit",
}

export enum ContentAdvisoryRating {
    Clean = "Clean",
    Explicit = "Explicit",
}

export enum Country {
    Usa = "USA",
}

export enum Currency {
    Usd = "USD",
}

export enum Kind {
    Podcast = "podcast",
}

export enum WrapperType {
    Track = "track",
}
