import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly url: string = environment.BASE_URL;

  constructor(
    private http: HttpClient,
  ) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/auth`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/user`, data);
  }
}
