import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario()
  mensagem = "";
  
  

  constructor(
    private router: Router,
    private LoginService:LoginService
  ) { }

  ngOnInit(): void {
  }


  
  fazerLogin(){
    this.LoginService.loginUserFromRemote(this.usuario).subscribe(
      data => {
        
        GlobalConstant.usuarioLogado = data.id;
        GlobalConstant.usuarioNomeLogado = data.nome;
        console.log(GlobalConstant.usuarioAutenticado)
        GlobalConstant.usuarioAutenticado = true;
        console.log(GlobalConstant.usuarioAutenticado)
        this.router.navigate(['/menu'])
        console.log("Resposta recebida")
      },
      error => {
        console.log("Exceção aconteceu");
        this.mensagem = "Email e senha inválidos. Favor verificar suas informações."
        console.log(GlobalConstant.usuarioAutenticado)
        GlobalConstant.usuarioAutenticado = false;

      }

      
    );

      
  }

  usuarioEstaAutenticado(){
    return GlobalConstant.usuarioAutenticado;
  }

}
