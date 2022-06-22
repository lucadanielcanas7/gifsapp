import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _userHistory: string[] = [];

  get userHistory(): string[] {
    return [...this._userHistory];
  }

  searchGifs(query: string) {
    this._userHistory.unshift(query);
    console.log(this._userHistory);
  }
}
