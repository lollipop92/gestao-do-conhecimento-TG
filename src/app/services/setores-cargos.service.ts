import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../model/cargo';
import { Setor } from '../model/setor';

@Injectable({
  providedIn: 'root'
})
export class SetoresCargosService {

  apiUrl = "http://localhost:8050/"

  constructor(private _http: HttpClient) { }

  criarSetor( setor : Setor){
    return this._http.post<any>(this.apiUrl + "setor", setor)
  }

  listarSetores() {
    return this._http.get<Setor[]>(this.apiUrl + "setor")
  }

  onDeleteSetor(setor : Setor){
    return this._http.delete(this.apiUrl + "setor/" + setor.id)
  }

  criarCargo(cargo : Cargo){
    return this._http.post<any>(this.apiUrl + "cargo", cargo)
  }

  listarCargos() {
    return this._http.get<Cargo[]>(this.apiUrl + "cargo")
  }

  onDeleteCargo(cargo : Cargo){
    return this._http.delete(this.apiUrl + "cargo/" + cargo.id)
  }

}
