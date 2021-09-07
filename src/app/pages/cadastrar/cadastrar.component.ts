import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario = new Usuario();
  mensagemSucesso = "";
  mensagemErro: any ;
  


  constructor(
    private router: Router,
    private CadastroService:CadastroService
  ) { }

  ngOnInit(): void {
  }
  
  cadastrar(f:any) {
        
    this.CadastroService.RegisterUserFromRemote(this.usuario).subscribe(
      data => {

        console.log("Resposta recebida");
        this.mensagemSucesso = "Cadastro realizado. Por favor, faça login.";
        this.mensagemErro = "";
                
        //reset formulário
        //f.resetForm();

      },
      error => {

        console.log("Exceção aconteceu");
        this.mensagemErro = error.error;
        this.mensagemSucesso = ""
      }
    )

  }



}
