import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  //Select the view query element (input)
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search(): void {
    const value = this.txtSearch.nativeElement.value;

    if (value.trim().length !== 0) {
      this.gifsService.searchGifs(value);

      this.txtSearch.nativeElement.value = '';
    }
  }
}
