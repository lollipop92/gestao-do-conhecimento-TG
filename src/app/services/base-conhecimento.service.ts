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
  

  public getBaseConhecimento(): Observable<any> {
    return this._http.get(this.apiUrl + "/all");
  }

  
  public criarBaseConhecimento(baseConhecimento: BaseConhecimento): Observable<any> {

    console.log(baseConhecimento)
    return this._http.post(this.apiUrl, baseConhecimento);

  }

  public editarBaseConhecimento(baseConhecimento: BaseConhecimento): Observable<any> {

    return this._http.put<any>(this.apiUrl + "/" + GlobalConstant.baseConhecimentoSelecionada.id, baseConhecimento);

  }

  public getUserFromRemote(usuario: any): Observable<any> {

    return this._http.get<any>(this.apiUrl2 + "/" + usuario);

  } 

  public remover(): Observable<any> {
    return this._http.delete(this.apiUrl + "/" +  GlobalConstant.baseConhecimentoSelecionada.id)

  }

}
