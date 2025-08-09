import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContentCardComponent } from "../content-card/content-card.component";
import { NewHomeComponent } from "../new-home/new-home.component";

@Component({
  selector: 'app-home',
  imports: [MatCardModule, ContentCardComponent, ContentCardComponent, NewHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
