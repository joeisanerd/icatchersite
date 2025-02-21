import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule
        , MatIconModule
        , MatButtonModule
        , MatToolbarModule
        , RouterModule
        , MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
  ]
})
export class AppComponent {
  title = 'icatcher-static';

  constructor(private meta:Meta){

    this.meta.addTags([
      { name: 'og:type', content: 'podcast' },
      { name: 'og:site_name', content: 'iCatcher' }
    ]);
  }
}
