import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
    .form {
      display: flex;
    }
    select {
      width: 75px;
      margin-left: 1rem;
    }
    `
  ]
})
export class SearchComponent {

  //Select the view query element (input)
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  @ViewChild('sltPagination') sltPagination!: ElementRef<HTMLSelectElement>;

  constructor(private gifsService: GifsService) {}

  search(): void {
    const txtSearchValue = this.txtSearch.nativeElement.value;
    const sltPaginationValue = this.sltPagination.nativeElement.value;

    if (txtSearchValue.trim().length !== 0) {
      this.gifsService.searchGifs(txtSearchValue,Number(sltPaginationValue));

      this.txtSearch.nativeElement.value = '';
    }
    this.sltPagination.nativeElement.value = '10';
  }
}
