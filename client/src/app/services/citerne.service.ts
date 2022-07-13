import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citerne } from '../models/citerne';

@Injectable({
  providedIn: 'root',
})
export class CiterneService {
  private CiterneUrl = 'http://localhost:4000/api/citerne/';
  constructor(private http: HttpClient) {}

  getAllCiterne() {
    return this.http.get<any>(this.CiterneUrl);
  }

  addCiterne(citerne: Citerne) {
    return this.http.post<any>(this.CiterneUrl + 'add', citerne);
  }

  deleteCiterne(id: number) {
    return this.http.delete<any>(this.CiterneUrl + 'delete/' + id);
  }

  getbyId(id: any) {
    return this.http.get<any>(this.CiterneUrl + 'getOne/' + id);
  }

  updateCiterne(id: any, citerne: Citerne) {
    return this.http.put<any>(this.CiterneUrl + 'update/' + id, citerne);
  }
}
