import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aprendizagem } from '../model/aprendizagem';
import { GlobalConstant } from '../model/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class AprendizagemService {

  constructor(private _http: HttpClient) { }
  apiUrl = "http://localhost:8050/processo"

  getListaAprendizagem(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  criarAprendizagem(aprendizagem : Aprendizagem): Observable<any> {
    return this._http.post(this.apiUrl, aprendizagem);
  }

  editarAprendizagem(): Observable<any> {
    console.log(GlobalConstant.aprendizagemSelecionada)
    return this._http.put(this.apiUrl+ "/" + GlobalConstant.aprendizagemSelecionada.id, GlobalConstant.aprendizagemSelecionada);
  }


}
