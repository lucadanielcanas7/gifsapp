import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'B3elKYya4Lu25D4oV7DJaWmDQMOOmMoH';
  private _userHistory: string[] = [];

  public results: Gif[] = [];

  get userHistory(): string[] {
    return [...this._userHistory];
  }

  constructor(private http: HttpClient) { }

  //#region PUBLIC METHODS
  searchGifs(query: string, pagination: number) {
    query = query.trim().toLowerCase();

    if (!this._userHistory.includes(query)) {
      this._userHistory.unshift(query);
      this._userHistory = this._userHistory.splice(0, 10);
    }

    this.http.get<SearchGifsResponse>(
      `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=${pagination}`
      )
      .subscribe( (res) => {
        this.results = res.data;
      });
  }
  //#endregion

}
