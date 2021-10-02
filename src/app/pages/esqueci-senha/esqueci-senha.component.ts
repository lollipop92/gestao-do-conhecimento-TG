import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { EsqueciSenhaService } from 'src/app/services/esqueci-senha.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

  usuario = new Usuario();
  mensagemSucesso = "";
  mensagemError = "";  

  constructor(
    private router: Router,
    private esqueciSenhaService : EsqueciSenhaService
  ) { }

  ngOnInit(): void {
  }

  esqueciSenha() {
    console.log(this.usuario.email);
    this.esqueciSenhaService.esqueciMinhaSenha(this.usuario.email).subscribe(
      data => {
        console.log("Email enviado");
        this.mensagemSucesso ="Email enviado"
      },      
    )
  }

  logout(){

    sessionStorage.removeItem("usuario");
    this.router.navigateByUrl("/login");

  }

}
