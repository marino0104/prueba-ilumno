import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiUrl='https://cms.qailumno.com/servicios';
  private newsParam='noticias';
  private programsParam='programas';
  private registerParam='registro';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any>{
    const urlNews=`${this.apiUrl}/${this.newsParam}`;
    return this.http.get<any>(urlNews);
  }
  getPrograms(): Observable<any>{
    const urlPrograms=`${this.apiUrl}/${this.programsParam}`;
    return this.http.get<any>(urlPrograms);
  }
  sendRegister(body): Observable<any>{
    const headers={
      'Content-Type': 'application/json'
    }
    const urlRegister=`${this.apiUrl}/${this.registerParam}`;
    return this.http.post<any>(urlRegister, body, {headers});
  }

}
