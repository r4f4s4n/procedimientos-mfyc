import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from '../models/video';

const enum endpoint {
  categoria = '/categoria/',
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private URL = 'https://localhost:44302/video';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Video[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.get<Video[]>(`${this.URL}`, { headers: headers });
  }

  getByCategoria(categoria: string): Observable<Video[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.get<Video[]>(`${this.URL}${endpoint.categoria}${categoria}`, { headers: headers });
  }

}
