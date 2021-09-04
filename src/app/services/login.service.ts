import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) {}

  login(email:string, password:string){
    let body = {
      "nome": "Pinafi",
      "email":"pinafi@gmail.com",
      "senha":"1992-12-17",
      "setor":"financeiro",
      "cargo":"dev"
    };
    return this.http.post('http://localhost:8050/api/v1/usuario',body,{headers:{contentType:"application/json"}}).toPromise()
  }
}
