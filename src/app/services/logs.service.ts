import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../model/config';
import { GlobalConstant } from '../model/globalConstants';
import { Logs } from '../model/logs';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogsService {

  apiUrl = "http://localhost:8050/api/v1/logs"

  constructor(private _http: HttpClient) { }

  listarLogs() {
    return this._http.get<Logs[]>(this.apiUrl)
  }

  registrarLog(log : Logs):Observable<any>{
    return this._http.post<any>(this.apiUrl, log)
  }

}
