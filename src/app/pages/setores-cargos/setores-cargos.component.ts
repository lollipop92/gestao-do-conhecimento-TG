import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/model/cargo';
import { Setor } from 'src/app/model/setor';
import { SetoresCargosService } from 'src/app/services/setores-cargos.service';

@Component({
  selector: 'app-setores-cargos',
  templateUrl: './setores-cargos.component.html',
  preserveWhitespaces: true,
  styleUrls: ['./setores-cargos.component.css']
})
export class SetoresCargosComponent implements OnInit {

  setores: Setor[] = [];
  cargos: Cargo[] = [];
  setor = new Setor();
  cargo= new Cargo();

  constructor(
    private router: Router,
    private SetoresCargosService : SetoresCargosService
  ) { }

  ngOnInit(): void {
    this.listarSetores();
    this.listarCargos();    
  }

  criarSetor(){    
    this.SetoresCargosService.criarSetor(this.setor).subscribe(
      data => {
         this.listarSetores();
      }
    );
  }

  listarSetores(){

    this.SetoresCargosService.listarSetores().subscribe(
      dados => { 
        this.setores = dados        
      }
    );

  }
  onEditSetor(setor : Setor){

  }
  onDeleteSetor(setor : Setor){
    this.SetoresCargosService.onDeleteSetor(setor).subscribe(
      data => {
         this.listarSetores();
      }
    );
  }

  criarCargo(){
    this.SetoresCargosService.criarCargo(this.cargo).subscribe(
      data => {
         this.listarCargos();
      }
    );
  }

  listarCargos(){
    this.SetoresCargosService.listarCargos().subscribe(
      dados => {         
        this.cargos = dados        
      }
    );
  }

  onEditCargo(cargo : Cargo){

  }
  onDeleteCargo(cargo : Cargo){
    this.SetoresCargosService.onDeleteCargo(cargo).subscribe(
      data => {
         this.listarCargos();
      }
    )
  }

}
