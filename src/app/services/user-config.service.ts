import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  constructor(private http : HttpClient) { }

  getUser( ){
       
    let body = {
      "nome": 'teste1',
      "email": 'testeemail',
      "senha": 'testepassword',
      "setor": 'testesetor',
      "cargo": 'testecargo'
    };
        
       return body
    
  }

}
