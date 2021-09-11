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
  endPoint = "/2?"
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http : HttpClient) {}

  public getUserFromRemote(usuario:Usuario):Observable<any>{
          
    return this._http.get<any>(this.apiUrl + "/" + GlobalConstant.usuarioLogado);

  }

  
  public editUserFromRemote(usuario : Usuario):Observable<any>{
    
    console.log(usuario.nome)
    return this._http.put<any>(this.apiUrl + "/" + GlobalConstant.usuarioLogado + "?" +
    "nome=" + usuario.nome + "&" +
    "email=" + usuario.email + "&" +
    "senha=" + usuario.senha + "&" +
    "setor=" + usuario.setor + "&" +
    "cargo=" + usuario.cargo + "&" ,usuario);    

  }

}
