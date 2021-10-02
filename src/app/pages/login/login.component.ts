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
    this.LoginService.loginUserFromRemote(this.usuario).toPromise().then(data => { 
        
        delete data["senha"];
        sessionStorage.setItem("usuario", JSON.stringify(data));

        this.router.navigate(['/menu'])
        
      }).catch(error => {

        this.mensagem = "Email e senha inválidos. Favor verificar suas informações.";
        
      }     

      
    );

      
  }
  


}
