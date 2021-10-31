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
  usuario: any = null;

  constructor(private _http: HttpClient) {    
    let usuario:any = sessionStorage.getItem("usuario");
    this.usuario = Object.assign(new Usuario(), JSON.parse(usuario));
   }

  public getUserFromRemote(): Observable<any> {    

    return this._http.get<any>(this.apiUrl + "/" + this.usuario.id);

  }

  public checkUserFromRemote(userId:any): Observable<any> {    

    return this._http.get<any>(this.apiUrl + "/" + userId);

  }


  public editUserFromRemote(usuario1: Usuario): Observable<any> {

    return this._http.put<any>(this.apiUrl + "/" + this.usuario.id, usuario1);

  }

}
