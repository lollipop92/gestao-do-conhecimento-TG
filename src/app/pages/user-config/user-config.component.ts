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
  mensagemErro: any ;  
        
  constructor(
    private router: Router,
    private UserConfigService:UserConfigService

  ) { }

  ngOnInit(): void {
    this.getUser();
    
  }

  //Não tá funcionando
  editarUsuario(){

    this.UserConfigService.editUserFromRemote(this.usuario).subscribe(
      data => {
        this.usuario = data;
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
