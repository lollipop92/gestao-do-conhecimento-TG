import { Component, OnInit } from '@angular/core';
import { Aprendizagem } from 'src/app/model/aprendizagem';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { FundoTelaBotoesComponent } from '../fundo-tela-botoes/fundo-tela-botoes.component';


@Component({
  selector: 'app-aprendizagem',
  templateUrl: './aprendizagem.component.html',
  styleUrls: ['./aprendizagem.component.css']
})
export class AprendizagemComponent implements OnInit {

  etapaComponente : any = 1
  aprendizagem = new Aprendizagem;
  

  constructor( ) { }

  titulo = "Aprendizagem";
  icone = "../../../assets/imgs/aprendizagem.JPG"

  ngOnInit(): void {
    this.aprendizagem = GlobalConstant.aprendizagemSelecionada
  }

  etapa1(){
   this.etapaComponente = 1;   
    
  }
  etapa2(){
    this.etapaComponente = 2;
  }
  etapa3(){
    this.etapaComponente = 3;
  }
  etapa4(){
    this.etapaComponente = 4;
  }

}
