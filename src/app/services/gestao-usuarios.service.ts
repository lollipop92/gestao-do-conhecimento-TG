import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../model/config';
import { GlobalConstant } from '../model/globalConstants';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class GestaoUsuariosService {

  apiUrl = "http://localhost:8050/api/v1"

  constructor(private _http: HttpClient) { }

  listarUsuarios() {
    return this._http.get<Usuario[]>(this.apiUrl + '/usuarios');
  }

  listarConfigs() {
    return this._http.get<Config[]>(this.apiUrl + '/Config');
  }

  remover() {
    
    return this._http.delete(this.apiUrl + "/" +  GlobalConstant.usuarioSelecionado.id)
  }


}


