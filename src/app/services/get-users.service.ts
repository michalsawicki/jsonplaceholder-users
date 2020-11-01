import { HttpData } from './../interfaces/http-data';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<HttpData>(environment.usersUrl);
  }

}
