import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly url: string = environment.PRORD_URL;

  constructor(
    private http: HttpClient,
  ) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/auth`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/user`, data);
  }

  analytics(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/analytics`, data);
  }

  createAccount(id: string): Observable<any> {
    return this.http.post<any>(`${this.url}/account`, id);
  }

  seachAccountData(idConta: string): Observable<any> {
    return this.http.get<any>(`${this.url}/account/${idConta}`);
  }

  healthcheck(): Observable<any> {
    return this.http.get<any>(`${this.url}/healthcheck`);
  }
}
