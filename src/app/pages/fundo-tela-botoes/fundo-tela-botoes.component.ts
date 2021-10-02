import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-fundo-tela-botoes',
  templateUrl: './fundo-tela-botoes.component.html',
  styleUrls: ['./fundo-tela-botoes.component.css']
})
export class FundoTelaBotoesComponent implements OnInit {

  nomeUsuario = " ";

  constructor(
    private router : Router
  ) {
    let usuario:any = sessionStorage.getItem("usuario");
    usuario = Object.assign(new Usuario(), JSON.parse(usuario));
    this.nomeUsuario = usuario.nome;
   }
    

  ngOnInit(): void {
  }

  logout(){

    sessionStorage.removeItem("usuario");
    this.router.navigateByUrl("/login");

  }

}
