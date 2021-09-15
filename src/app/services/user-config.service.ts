import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstant } from '../model/globalConstants';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  apiUrl = "http://localhost:8050/api/v1"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  public getUserFromRemote(usuario: Usuario): Observable<any> {

    return this._http.get<any>(this.apiUrl + "/" + GlobalConstant.usuarioLogado);

  }


  public editUserFromRemote(usuario: Usuario): Observable<any> {

    return this._http.put<any>(this.apiUrl + "/" + GlobalConstant.usuarioLogado, usuario);

  }

}
