import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  //Select the view query element (input)
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search(): void {
    const value = this.txtSearch.nativeElement.value;
    console.log(value);
    this.txtSearch.nativeElement.value = '';
  }

}
