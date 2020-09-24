import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListBook } from '../model/listBook.model';
@Injectable({
  providedIn: 'root',
})
export class ListBookService {
  constructor(public _httpClient: HttpClient) {}

  getListBook() {
    const url = 'https://api.swetapandey.org/api/listbook/?userName=8130331002';
    return this._httpClient.get<ListBook>(url);
  }
}
