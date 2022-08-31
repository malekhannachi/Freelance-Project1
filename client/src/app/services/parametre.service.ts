import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parametre } from '../models/parametre';


@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  private ParametreUrl =environment.ApiUrl + 'analyse/parameter/';
  constructor(private http: HttpClient) {}

  getAllParametre() {
    return this.http.get<any>(this.ParametreUrl+'all');
  }

  addParametre(parametre: Parametre) {
    return this.http.post<any>(this.ParametreUrl + 'add', parametre);
  }

  deleteParametre(id: number) {
    return this.http.delete<any>(this.ParametreUrl + 'delete/' + id);
  }

  getbyId(id: any) {
    return this.http.get<any>(this.ParametreUrl + 'one/' + id);
  }

  updateParametre(id: any, parametre: Parametre) {
    return this.http.put<any>(this.ParametreUrl + 'update/' + id, parametre);
  }
}
