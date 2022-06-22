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
    
    query = query.trim().toLowerCase();

    if (!this._userHistory.includes(query)) {
      this._userHistory.unshift(query);
      this._userHistory = this._userHistory.splice(0, 10);
    }
    console.log(this._userHistory);
  }
}
