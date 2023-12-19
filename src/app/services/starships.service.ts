import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private apiUrl = 'https://swapi.py4e.com/api/starships';

  constructor(private http: HttpClient) { }

  getStarships(url?: string): Observable<any> {
    const apiUrl = url || this.apiUrl;
    return this.http.get(apiUrl);
  }

  getStarshipDetails(id: string): Observable<any> {
    const apiUrl = `${this.apiUrl}/${id}/`;
    return this.http.get(apiUrl);
  }
}
