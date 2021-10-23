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
  apiUrl = "http://localhost:8050/baseConhecimento"
  apiUrl2 = "http://localhost:8050/api/v1"
  apiUrl3 = "http://localhost:8050/upload"
  

  public getBaseConhecimento(): Observable<any> {
    return this._http.get(this.apiUrl + "/all");
  }

  
  public criarBaseConhecimento(baseConhecimento: BaseConhecimento): Observable<any> {

    return this._http.post(this.apiUrl, baseConhecimento);

  }

  public editarBaseConhecimento(baseConhecimento: BaseConhecimento): Observable<any> {

    return this._http.put<any>(this.apiUrl + "/" + GlobalConstant.baseConhecimentoSelecionada.id, baseConhecimento);

  }

  public remover(): Observable<any> {
    return this._http.delete(this.apiUrl + "/" +  GlobalConstant.baseConhecimentoSelecionada.id)

  }
  

  public salvarFile(file: any): Observable<any> {

    let body = new FormData();
    // Add file content to prepare the request
    body.append("file", file);

    return this._http.post(this.apiUrl3, file);

  }  

  public getUserFromRemote(usuario: any): Observable<any> {

    return this._http.get<any>(this.apiUrl2 + "/" + usuario);

  }





}
