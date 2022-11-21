import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  shorten(data: any) {
    return this.http.post<any>(`${this.baseUrl}shorten?url=${data}`, '');
  }
}
