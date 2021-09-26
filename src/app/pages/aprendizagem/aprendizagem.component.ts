import { Component, OnInit } from '@angular/core';
import { FundoTelaBotoesComponent } from '../fundo-tela-botoes/fundo-tela-botoes.component';


@Component({
  selector: 'app-aprendizagem',
  templateUrl: './aprendizagem.component.html',
  styleUrls: ['./aprendizagem.component.css']
})
export class AprendizagemComponent implements OnInit {

  etapa : any = 1
  

  constructor( ) { }

  titulo = "Aprendizagem";
  icone = "../../../assets/imgs/aprendizagem.JPG"

  ngOnInit(): void {
  }

  etapa1(){
   this.etapa = 1;   
    
  }
  etapa2(){
    this.etapa = 2;
  }
  etapa3(){
    this.etapa = 3;
  }
  etapa4(){
    this.etapa = 4;
  }

}
