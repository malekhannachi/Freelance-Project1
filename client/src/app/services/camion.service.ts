import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camion } from '../models/camion';

@Injectable({
  providedIn: 'root'
})
export class CamionService {
  private CamionUrl = 'http://localhost:4000/api/camion/';
  constructor(private http: HttpClient) { }


  getAllCamion() {
    return this.http.get<any>(this.CamionUrl + 'allCamion');
  }

  addCamion(camion: Camion) {
    return this.http.post<any>(this.CamionUrl + 'add', camion);
  }

  deleteCamion(id: number) {
    return this.http.delete<any>(this.CamionUrl + 'delete/' + id);
  }

  getbyId(id: any) {
    return this.http.get<any>(this.CamionUrl + 'oneCamion/' + id);
  }

  updateCamion(id: any, camion: Camion) {
    return this.http.put<any>(this.CamionUrl + 'update/' + id, camion);
  }

  enterCamion(id: number) {
    return this.http.post<any>(this.CamionUrl + 'entreCamion/' + id,id);
  }
}
