import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
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
        
  constructor(
    private router: Router,
    private UserConfigService:UserConfigService

  ) { }

  ngOnInit(): void {
    this.getUser();
    
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

 
}
