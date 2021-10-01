import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-config',
  templateUrl: './menu-config.component.html',
  styleUrls: ['./menu-config.component.css']
})
export class MenuConfigComponent implements OnInit {

  constructor() { }

  titulo = "Configurações do Sistema";
  icone = "../../../assets/imgs/configuracoes.JPG";
  configuracao : any = 0

  ngOnInit(): void {
  }

configuracao1(){
  this.configuracao = 1;
}

configuracao2(){
  this.configuracao = 2;
}

configuracao3(){
  this.configuracao = 3;
}

configuracao4(){
  this.configuracao = 4;
}

configuracao5(){
  this.configuracao = 5;
}

}
