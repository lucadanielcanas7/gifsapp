import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
    `
     .my-card:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    `
  ]
})
export class ResultComponent {

  get results() {
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsService) { }

}
