import { Component, OnInit } from '@angular/core';
import { FundoTelaBotoesComponent } from '../fundo-tela-botoes/fundo-tela-botoes.component';

@Component({
  selector: 'app-aprendizagem',
  templateUrl: './aprendizagem.component.html',
  styleUrls: ['./aprendizagem.component.css']
})
export class AprendizagemComponent implements OnInit {

  constructor( ) { }

  titulo = "Aprendizagem";
  icone = "../../../assets/imgs/aprendizagem.JPG"

  ngOnInit(): void {
  }

}
