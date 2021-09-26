import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseConhecimento } from '../model/base-conhecimento';

@Injectable({
  providedIn: 'root'
})
export class BaseConhecimentoService {

  constructor(private _http: HttpClient) { }
  apiUrl = "http://localhost:8050/baseConhecimento"
  apiUrl2 = "http://localhost:8050/api/v1"

  public getBaseConhecimento(): Observable<any> {
    return this._http.get(this.apiUrl + "/all");
  }

  
  public criarBaseConhecimento(file:any, baseConhecimento : BaseConhecimento): Observable<any> {

    // Create form data
    const formData = new FormData(); 
     
    console.log(baseConhecimento)
    // Store form name as "file" with file data
  
    baseConhecimento.fluxograma = formData.append("file", file, file.name);

    console.log(baseConhecimento)

    return this._http.post(this.apiUrl, baseConhecimento);

  }

  public getUserFromRemote(usuario: any): Observable<any> {

    return this._http.get<any>(this.apiUrl2 + "/" + usuario);

  }

}
