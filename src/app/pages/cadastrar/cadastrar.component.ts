import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/model/globalConstants';
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
  usuarioEmail : string = "";
  mensagemErroDominio= "" ;
  


  constructor(
    private router: Router,
    private CadastroService:CadastroService
  ) { }

  ngOnInit(): void {
  }
  
  cadastrar(f:any) {
    
    if(this.verificarEmail()){
      this.CadastroService.RegisterUserFromRemote(this.usuario).subscribe(
        async data => {
  
          console.log("Resposta recebida");
          this.mensagemSucesso = "Cadastro realizado. Por favor, faça login.";
          this.mensagemErro = "";
          this.mensagemErroDominio = "";
          await this.sleep(2000);
          this.router.navigate(['/login'])
                  
          //reset formulário
          //f.resetForm();
  
        },
        error => {
  
          console.log("Exceção aconteceu");
          this.mensagemErro = error.error;
          this.mensagemSucesso = ""
          this.mensagemErroDominio = ""
        }
      )
    } else
    
    this.mensagemErroDominio = "Dominio não autorizado! Favor utilizar "+GlobalConstant.dominio
    this.mensagemSucesso = "" 
    this.mensagemErro = "";   
    
  }

  verificarEmail(){
     return this.usuario.email.includes(GlobalConstant.dominio);
  }

  sleep(ms:any){
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
