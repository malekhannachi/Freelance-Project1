import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BonReception } from '../models/bon-reception';

@Injectable({
  providedIn: 'root'
})
export class BonReceptionService {

  private BonReceptionUrl = 'http://localhost:4000/api/bonReception/';
  constructor(private http: HttpClient) {}

  getAllBonReception() {
    return this.http.get<any>(this.BonReceptionUrl+'getAll');
  }

  addBonReception(bonReception: BonReception) {
    return this.http.post<any>(this.BonReceptionUrl + 'add', bonReception);
  }

  deleteBonReception(id: number) {
    return this.http.delete<any>(this.BonReceptionUrl + 'delete/' + id);
  }

  getbyId(id: any) {
    return this.http.get<any>(this.BonReceptionUrl + 'getOne/' + id);
  }

  updateBonReception(id: any, bonReception: BonReception) {
    return this.http.put<any>(this.BonReceptionUrl + 'update/' + id, bonReception);
  }
}
