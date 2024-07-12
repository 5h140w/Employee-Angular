import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private API_URL = 'https://retoolapi.dev/HYd96h/data';
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
}
