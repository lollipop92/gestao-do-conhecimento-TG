import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
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
        console.log("Resposta recebida")
        this.router.navigate(['/menu'])
      },
      error => {
        console.log("Exceção aconteceu");
        this.mensagem = "Email e senha inválidos. Favor verificar suas informações."

      }
    );
  }

}
