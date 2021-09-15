import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstant } from '../model/globalConstants';
import { Config } from '../model/config';

@Injectable({
  providedIn: 'root'
})
export class EditarConfigService {

  apiUrl = "http://localhost:8050/api/v1/Config"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

public getConfigFromRemote(config: Config): Observable<any> {

  
  return this._http.get<any>(this.apiUrl + "/" + GlobalConstant.configSelecionada.id);

}

public editConfigFromRemote(config: Config): Observable<any> {

  console.log(GlobalConstant.configSelecionada.id)
  console.log(config)
  return this._http.put<any>(this.apiUrl + "/" + GlobalConstant.configSelecionada.id, config);

}

}
