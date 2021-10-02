import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessoEtapa } from 'src/app/model/processo-etapa';

@Injectable({
  providedIn: 'root'
})
export class ProcessoEtapaService {

  apiUrl = "http://localhost:8050/processo_etapa"

  constructor(private _http: HttpClient) { }

  criarProcessoEtapa( processoEtapa : ProcessoEtapa){
    return this._http.post<any>(this.apiUrl, processoEtapa)
  }

  listarProcessosEtapas() {
    return this._http.get<ProcessoEtapa[]>(this.apiUrl)
  }

  onDeleteProcessoEtapa(processoEtapa : ProcessoEtapa){
    return this._http.delete(this.apiUrl + "/" + processoEtapa.id)
  }

}
