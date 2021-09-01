import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Video} from '../models/video';
import { catchError } from 'rxjs/operators';

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

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAll(): Observable<Video[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.get<Video[]>(`${this.URL}`, { headers: headers }).pipe(catchError(this.handleError));
  }

  getByCategoria(categoria: string): Observable<Video[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.get<Video[]>(`${this.URL}${endpoint.categoria}${categoria}`, { headers: headers }).pipe(catchError(this.handleError));
  }

}
