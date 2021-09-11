import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-conhecimento',
  templateUrl: './base-conhecimento.component.html',
  styleUrls: ['./base-conhecimento.component.css']
})
export class BaseConhecimentoComponent implements OnInit {

  constructor() { }

  titulo = "Base de Conhecimento";
  icone = "../../../assets/imgs/baseConhecimento.JPG"

  ngOnInit(): void {
  }

}
