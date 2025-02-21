import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, MatIconModule, MatButtonModule, MatToolbarModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
  ]
})
export class AppComponent {
  title = 'icatcher-static';

  constructor(){

  }
}
