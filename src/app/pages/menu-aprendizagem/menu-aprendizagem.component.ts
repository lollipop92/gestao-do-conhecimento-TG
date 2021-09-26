import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-aprendizagem',
  templateUrl: './menu-aprendizagem.component.html',
  styleUrls: ['./menu-aprendizagem.component.css'],
  preserveWhitespaces: true,
})
export class MenuAprendizagemComponent implements OnInit {

  constructor() { }

  titulo = "Aprendizagem";
  icone = "../../../assets/imgs/aprendizagem.JPG"

  ngOnInit(): void {
  }

}
