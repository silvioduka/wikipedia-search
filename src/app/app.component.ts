import { Search } from './models';
import { Component } from '@angular/core';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: Search[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string): void {
    this.pages = [];
    
    this.wikipedia.serach(term).subscribe(pages => {
      this.pages = pages;
    });
  }
}
