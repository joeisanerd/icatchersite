import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, ParamMap, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HelpService, HelpTopic } from './help.service';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownModule],
  providers: [HelpService],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  topics: HelpTopic[] = [];
  selectedTopic: HelpTopic | null = null;
  markdown: string | null = null;
  loading = false;
  error = '';
  currentShortName: string | null = null;

  constructor(private helpService: HelpService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.helpService.getTopics().subscribe({
      next: topics => {
        this.topics = topics;
        this.route.paramMap.subscribe((params: ParamMap) => {
          const shortName = params.get('shortName');
          this.currentShortName = shortName;
          if (shortName) {
            const topic = topics.find(t => t.shortName === shortName);
            if (topic) {
              this.loadTopic(topic);
            } else {
              this.markdown = null;
              this.selectedTopic = null;
              this.error = 'Topic not found.';
            }
          } else {
            this.markdown = null;
            this.selectedTopic = null;
          }
        });
      },
      error: err => this.error = 'Failed to load help topics.'
    });
  }

  loadTopic(topic: HelpTopic) {
    this.selectedTopic = topic;
    this.markdown = null;
    this.loading = true;
    this.error = '';
    this.helpService.getTopicDetail(topic.shortName).subscribe({
      next: md => {
        this.markdown = md;
        this.loading = false;
      },
      error: err => {
        this.error = 'Failed to load article.';
        this.loading = false;
      }
    });
  }
}
