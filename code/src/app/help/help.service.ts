import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HelpTopic {
  shortName: string;
  title: string;
  summary?: string;
}

@Injectable({ providedIn: 'root' })
export class HelpService {
  constructor(private http: HttpClient) {}

  getTopics(): Observable<HelpTopic[]> {
    return this.http.get<HelpTopic[]>('/assets/help/topics.json');
  }

  getTopicDetail(shortName: string): Observable<string> {
    return this.http.get(`/assets/help/${shortName}.md`, { responseType: 'text' });
  }
}
