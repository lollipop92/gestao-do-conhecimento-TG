import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Usuario } from 'src/app/model/usuario';
import { EditarUsuarioService } from 'src/app/services/editar-usuario.service';
import { UserConfigService } from 'src/app/services/user-config.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario = new Usuario();
  mensagemSucesso = "";
  mensagemError = ""; 
  titulo = "Editar Usuário";
  icone = "../../../assets/imgs/gestao-usuarios.JPG";

  constructor(
    private router: Router,
    private editarUsuarioService : EditarUsuarioService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  editarUsuario(){

    this.editarUsuarioService.editUserFromRemote(this.usuario).subscribe(
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
    
      this.editarUsuarioService.getUserFromRemote(GlobalConstant.usuarioSelecionado).subscribe(
      data => {
        this.usuario = data;
        
      }

    );
  }

}
