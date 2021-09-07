import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient) {}

  public loginUserFromRemote(usuario:Usuario):Observable<any>{
    
    return this._http.post<any>('http://localhost:8050/api/v1/login',usuario)

  }
  
 
}
