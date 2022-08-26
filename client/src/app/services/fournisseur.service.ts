import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {
  private FournisseurUrl = 'http://localhost:4000/api/fournisseur/';
  constructor(private http: HttpClient) {}

  getAllFournisseur() {
    return this.http.get<any>(this.FournisseurUrl + 'all');
  }

  addFournisseur(fournisseur: Fournisseur) {
    return this.http.post<any>(this.FournisseurUrl + 'add', fournisseur);
  }

  deleteFournisseur(id: number) {
    return this.http.delete<any>(this.FournisseurUrl + 'delete/' + id);
  }

  getbyId(id: any) {
    return this.http.get<any>(this.FournisseurUrl + 'getOne/' + id);
  }

  updateFournisseur(id: any, fournisseur: Fournisseur) {
    return this.http.put<any>(this.FournisseurUrl + 'update/' + id, fournisseur);
  }


  getCamionByFounisseur(id:any){
    return this.http.get<any>(this.FournisseurUrl+'getfournusseurwithatru/'+id)
  }
}
