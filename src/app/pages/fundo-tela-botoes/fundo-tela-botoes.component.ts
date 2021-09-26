import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/app/model/globalConstants';

@Component({
  selector: 'app-fundo-tela-botoes',
  templateUrl: './fundo-tela-botoes.component.html',
  styleUrls: ['./fundo-tela-botoes.component.css']
})
export class FundoTelaBotoesComponent implements OnInit {

  constructor() { }

  nomeUsuario = GlobalConstant.usuarioNomeLogado;
  

  ngOnInit(): void {
  }

}
