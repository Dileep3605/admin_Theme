import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchingDataService {

  constructor(public _httpClient: HttpClient) { }

  getCompanyValues(){
    const url = 'https://api.swetapandey.org/api/Company';
    return this._httpClient.get(url);
  }
}
