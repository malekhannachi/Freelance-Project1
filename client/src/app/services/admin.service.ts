import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private AdminUrl = 'http://localhost:4000/api/admin/';

  constructor(private http: HttpClient) {}

  loginAdmin(admin: Admin) {
    return this.http.post<any>(this.AdminUrl + 'login', admin);
  }

  getAllAdmin() {
    return this.http.get<any>(this.AdminUrl + 'allAdmin');
  }

  addAdmin(admin: Admin) {
    return this.http.post<any>(this.AdminUrl + 'addAdmin', admin);
  }

  deleteAdmin(id: number) {
    return this.http.delete<any>(this.AdminUrl + id + '/delete');
  }

  //test admin logged or no
  isLoggedInAdmin() {
    let token = localStorage.getItem('myToken');

    if (token) {
      return true;
    } else {
      return false;
    }
  }
  //decode token and get data
  saveDataProfil() {
    const helper = new JwtHelperService();
    let myRawToken: any = localStorage.getItem('myToken');
    const decodedToken = helper.decodeToken(myRawToken);
    return decodedToken;
  }
}
