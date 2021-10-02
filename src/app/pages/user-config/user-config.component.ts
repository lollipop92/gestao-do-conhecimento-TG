import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/model/cargo';
import { Setor } from 'src/app/model/setor';
import { Usuario } from 'src/app/model/usuario';
import { SetoresCargosService } from 'src/app/services/setores-cargos.service';
import { UserConfigService } from 'src/app/services/user-config.service';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {
  
  usuario = new Usuario();
  mensagemSucesso = "";
  mensagemError = "";
  setores: Setor[] = [];
  cargos: Cargo[] = [];
  options: string[] = []
  setor1 = new Setor();
  cargo1 = new Cargo();     
        
  constructor(
    private router: Router,
    private UserConfigService:UserConfigService,
    private SetoresCargosService: SetoresCargosService

  ) { }

  ngOnInit(): void {

    this.getUser();

    this.listarCargos();
    this.listarSetores();

        
  }
  
  editarUsuario(){

    this.UserConfigService.editUserFromRemote(this.usuario).subscribe(
      data => {
        
        console.log("Resposta recebida");
        this.mensagemSucesso = "Usuário atualizado com sucesso";
      },

      error => {
        
        console.log("Exceção aconteceu");
        this.mensagemError = "Não foi possivél atualizar o usuário."
      }
    );

  }

  getUser(){    
    
    this.UserConfigService.getUserFromRemote(this.usuario).subscribe(
      data => {
        this.usuario = data;
        
      }

    );
  }

  listarSetores() {

    this.SetoresCargosService.listarSetores().subscribe(
      dados => {
        this.setores = dados

        var select = document.getElementById("setor")!;
        var el = document.createElement("option")
        el.textContent = this.usuario.setor
        el.setAttribute("selected", "selected")
        el.setAttribute("disabled", "disabled")
        select.appendChild(el)

        for (let dado of dados) {

          var opt = dado.setor;
          var el = document.createElement("option");
          el.setAttribute("style", "color: #1b1744;")
          el.textContent = opt;
          el.value = opt;

          select.appendChild(el);
        }
      }
    );

  }


  listarCargos() {
    this.SetoresCargosService.listarCargos().subscribe(
      dados => {
        this.cargos = dados

        var select = document.getElementById("cargo")!;

        var el = document.createElement("option")
        el.textContent = this.usuario.cargo
        el.setAttribute("disabled", "disabled")
        el.setAttribute("selected", "selected")
        el.setAttribute("hidden", "hidden")
        select.appendChild(el)

        for (let dado of dados) {

          var opt = dado.cargo;
          var el = document.createElement("option");
          el.setAttribute("style", "color: #1b1744;")
          el.textContent = opt;
          el.value = opt;

          select.appendChild(el);
        }

      }
    );
  }

 
}
