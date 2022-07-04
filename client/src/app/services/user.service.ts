import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:4000/api/agent';
  constructor(private http: HttpClient) {}

  loginUser(user: User) {
    return this.http.post<any>(this.userUrl + '/login', user);
  }

  addUser(user: User) {
    return this.http.post<any>(this.userUrl, user);
  }
}
