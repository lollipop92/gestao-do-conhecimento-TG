import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseConhecimento } from '../model/base-conhecimento';
import { GlobalConstant } from 'src/app/model/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class BaseConhecimentoService {

  constructor(private _http: HttpClient) { }
  apiUrl = "http://localhost:8050"
  

  public getBaseConhecimento(): Observable<any> {
    return this._http.get(`${this.apiUrl}/baseConhecimento/all`);
  }

  
  public criarBaseConhecimento(baseConhecimento: BaseConhecimento): Observable<any> {

    return this._http.post(`${this.apiUrl}/baseConhecimento`, baseConhecimento);

  }

  public editarBaseConhecimento(baseConhecimento: BaseConhecimento): Observable<any> {

    return this._http.put<any>(`${this.apiUrl}/baseConhecimento/${GlobalConstant.baseConhecimentoSelecionada.id}`, baseConhecimento);

  }

  public remover(): Observable<any> {
    return this._http.delete(`${this.apiUrl}/baseConhecimento/${GlobalConstant.baseConhecimentoSelecionada.id}`)

  }

  public salvarFile(file: any): Observable<any> {
    let body = new FormData();
    // Add file content to prepare the request
    body.append("file", file);
    let headers = new HttpHeaders();
    headers.append("Content-Type","multipart/form-data");
    return this._http.post(`${this.apiUrl}/upload`, body,{headers:headers,responseType:'text'});

  } 

  public getFile(id: any): Observable<any> {
    return this._http.get(`${this.apiUrl}/files/${id}`);

  } 

  public getUserFromRemote(usuario: any): Observable<any> {

    return this._http.get<any>(`${this.apiUrl}/api/v1/${usuario}`);

  }





}
