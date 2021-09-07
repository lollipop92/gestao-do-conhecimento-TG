import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private _http : HttpClient) {}

  
  /*public cadastro(usuario:Usuario){
       
    let body = usuario;
        
    return this._http.post('http://localhost:8050/api/v1/registrar',body,{headers:{contentType:"application/json"}}).toPromise()
    
  }*/

  public RegisterUserFromRemote(usuario:Usuario):Observable<any>{

    return this._http.post<any>('http://localhost:8050/api/v1/registrar',usuario)

  }
  
}
