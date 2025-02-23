import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentCardComponent } from "../content-card/content-card.component";

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterModule
    , ContentCardComponent
    , ContentCardComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
