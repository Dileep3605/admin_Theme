import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public _httpClient: HttpClient) {}

  getCompanyValues(params = {}) {
    const url = `/api/Company`;
    return this._httpClient.get(url, { params });
  }

  login(userMobile: string, userPassword: string, rememberMe?: string) {
    const url = '/api/Account/authenticate';
    const body = {
      mobile: userMobile,
      password: userPassword,
    };
    return this._httpClient.post(url, body);
  }
}
