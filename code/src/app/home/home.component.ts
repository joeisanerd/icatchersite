import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContentCardComponent } from "../content-card/content-card.component";
import { StoreLinkComponent } from '../store-link/store-link.component';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, ContentCardComponent, ContentCardComponent, StoreLinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
