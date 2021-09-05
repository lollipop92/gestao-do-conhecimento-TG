import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http : HttpClient) {}

  cadastro(nome: string, email:string, password:string, setor:string, cargo:string ){
       
    let body = {
      "nome": nome,
      "email": email,
      "senha": password,
      "setor": setor,
      "cargo": cargo
    };
        
    return this.http.post('http://localhost:8050/api/v1/usuario',body,{headers:{contentType:"application/json"}}).toPromise()
    
  }
  
}
