import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = environment.ApiUrl + 'agent';
  private loginUrl = environment.ApiUrl + 'auth';
  constructor(private http: HttpClient) {}

  loginUser(user: User) {
    return this.http.post<any>(this.loginUrl + '/login', user);
  }

  addUser(user: User) {
    return this.http.post<any>(this.userUrl, user);
  }

  updateUser(id: any, user: User) {
    return this.http.put<any>(this.userUrl + '/' + id, user);
  }

  getAllUser() {
    return this.http.get<any>(this.userUrl + '/get');
  }

  getbyId(id: any) {
    return this.http.get<any>(this.userUrl + '/' + id);
  }

  deleteUser(id: number) {
    return this.http.delete<any>(this.userUrl + '/' + id);
  }

  //decode token and get data
  saveDataProfil() {
    const helper = new JwtHelperService();
    let myRawToken: any = localStorage.getItem('myToken');
    const decodedToken = helper.decodeToken(myRawToken);
    return decodedToken;
  }

  //test user logged or no
  isLoggedIn() {
    let token = localStorage.getItem('myToken');
    if (token) return true;
    else return false;
  }

  //test admin logged or no
  isLoggedInAdmin() {
    let token = localStorage.getItem('myToken');

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == 'admin') {
        return true;
      } else {
        return false;
      }
    } else return false;
  }

  //test agent Facturation logged or no
  isLoggedInAgentFacturation() {
    let token = localStorage.getItem('myToken');

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == 'agentFacturation') {
        return true;
      } else {
        return false;
      }
    } else return false;
  }

  //test agent Reception logged or no
  isLoggedInAgentReception() {
    let token = localStorage.getItem('myToken');

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == 'agentReception') {
        return true;
      } else {
        return false;
      }
    } else return false;
  }

  //test agent Analyser logged or no
  isLoggedInAgentAnalyser() {
    let token = localStorage.getItem('myToken');

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == 'agentAnalyser') {
        return true;
      } else {
        return false;
      }
    } else return false;
  }
}
