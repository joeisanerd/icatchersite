import { Component } from '@angular/core';
import { ContentCardComponent } from "../content-card/content-card.component";

@Component({
  selector: 'app-frequently-asked-questions',
  imports: [ContentCardComponent
    , ContentCardComponent
  ],
  templateUrl: './frequently-asked-questions.component.html',
  styleUrl: './frequently-asked-questions.component.scss'
})
export class FrequentlyAskedQuestionsComponent {

}
