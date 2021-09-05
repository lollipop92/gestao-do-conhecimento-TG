import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nome:string = ""; ;
  public email:string = ""; 
  public senha:string = "";
  public senhaConfirmar:string = "";
  public setor:string = ""; 
  public cargo:string = "";


  constructor(
    private router: Router,
    private CadastroService:CadastroService
  ) { }

  ngOnInit(): void {
  }

  cadastrar() {

    //buscar informações que escrevi na tela

                    
    this.CadastroService.cadastro(this.nome,this.email, this.senha,this.setor,this.cargo).then((data) => {
      console.log(data);
    });
    
  }

}
