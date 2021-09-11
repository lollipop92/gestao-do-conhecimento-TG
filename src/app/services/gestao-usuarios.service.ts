import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  remover() {
    console.log(GlobalConstant.usuarioSelecionado)
    return this._http.delete(this.apiUrl + "/" +  GlobalConstant.usuarioSelecionado.id)
  }


}


