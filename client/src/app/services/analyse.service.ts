import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Analyse } from '../models/analyse';

@Injectable({
  providedIn: 'root',
})
export class AnalyseService {
  private AnalyseUrl = environment.ApiUrl +'analyse/';
  constructor(private http: HttpClient) {}

  getAllAnalyse() {
    return this.http.get<any>(this.AnalyseUrl + 'allAnalyse');
  }

  addAnalyse(analyse: Analyse) {
    return this.http.post<any>(this.AnalyseUrl + 'add', analyse);
  }

  deleteAnalyse(id: number) {
    return this.http.delete<any>(this.AnalyseUrl + 'delete/' + id);
  }

  getbyId(id: any) {
    return this.http.get<any>(this.AnalyseUrl + 'oneAnalyse/' + id);
  }

  updateAnalyse(id: any, analyse: Analyse) {
    return this.http.put<any>(this.AnalyseUrl + 'update/' + id, analyse);
  }

  getAnalyse( decision:string) {
    const queryParams = new HttpParams()
      .set('decision', 'Accepte',)
     
     
    return this.http.get<any>(this.AnalyseUrl + 'allAnalyse', {
      params: queryParams,
    });
  }

  getAnalyser( decision:string) {
    const queryParams = new HttpParams()
      .set('decision', 'Refuse',)
     
     
    return this.http.get<any>(this.AnalyseUrl + 'allAnalyse', {
      params: queryParams,
    });
  }

  
}
