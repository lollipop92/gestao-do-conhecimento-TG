import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsqueciSenhaService {

  apiUrl = "http://localhost:8050/resetPassword/"

  constructor(private _http: HttpClient) { }

  esqueciMinhaSenha(emailUsuario:any){
    console.log(this.apiUrl + emailUsuario)
    return this._http.get(this.apiUrl + emailUsuario)
  }


}
