import { Usuario } from './../../core/models/usuario';
import { UsuarioResponse } from './../../core/models/usuarioResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';

const enum endpoint {
  registro = '/registro',
  login = '/login'
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL = 'https://localhost:44302/usuario';
  // tslint:disable-next-line:variable-name
  private auth_token = environment.api;
  
  private _authChangeSub = new Subject<boolean>()
  public esUsuarioLogueado = this._authChangeSub.asObservable();

  constructor(private http: HttpClient) {
  }

  registro(usuario : Usuario): Observable<UsuarioResponse> {
    return this.http.post<UsuarioResponse>(`${this.URL}${endpoint.registro}`, usuario);
  }

  login(usuario : Usuario): Observable<UsuarioResponse> {
    return this.http.post<UsuarioResponse>(`${this.URL}${endpoint.login}`, usuario);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }

}
