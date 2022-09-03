import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Facture } from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private FactureUrl = environment.ApiUrl +'facture/';
  constructor(private http: HttpClient) {}

  getAllFacture() {
    return this.http.get<any>(this.FactureUrl+"getAll");
  }

  addFacture(facture: Facture) {
    return this.http.post<any>(this.FactureUrl + 'add', facture);
  }

  deleteFacture(id: number) {
    return this.http.delete<any>(this.FactureUrl + 'delete/' + id);
  }

  getbyId(id: any) {
    return this.http.get<any>(this.FactureUrl + 'getOne/' + id);
  }

  updateFacture(id: any, facture: Facture) {
    return this.http.put<any>(this.FactureUrl + 'update/' + id, facture);
  }
}
