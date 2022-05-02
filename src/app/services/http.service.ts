import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse, country } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCountryList(): Observable<APIResponse<country>> {
    return this.http.get<APIResponse<country>>(`${env.BASE_URL}`, {
     });
  }
}
