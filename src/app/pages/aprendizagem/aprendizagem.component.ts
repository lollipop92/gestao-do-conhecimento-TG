import { Component, OnInit } from '@angular/core';
import { Aprendizagem } from 'src/app/model/aprendizagem';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { AprendizagemService } from 'src/app/services/aprendizagem.service';
import { FundoTelaBotoesComponent } from '../fundo-tela-botoes/fundo-tela-botoes.component';


@Component({
  selector: 'app-aprendizagem',
  templateUrl: './aprendizagem.component.html',
  styleUrls: ['./aprendizagem.component.css']
})
export class AprendizagemComponent implements OnInit {

  etapaComponente : any = 1
  aprendizagem = new Aprendizagem;
  

  constructor(
    public aprendizagemService : AprendizagemService
   ) { }

  titulo = "Aprendizagem";
  icone = "../../../assets/imgs/aprendizagem.JPG"

  ngOnInit(): void {
    this.aprendizagem = GlobalConstant.aprendizagemSelecionada
    this.etapaComponente = this.aprendizagem.etapaIndice;
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

  salvar(etapa1:any){
    
    GlobalConstant.aprendizagemSelecionada.etapaIndice = 1;
    GlobalConstant.aprendizagemSelecionada.etapa1 = etapa1;
    if(etapa1 == "X_X"){
      GlobalConstant.aprendizagemSelecionada.etapaIndice = 2;
    }

    this.aprendizagemService.editarAprendizagem().subscribe(
      data => {
        console.log("Editado com sucesso")
      },
      error => {
        console.log("Não editado com sucesso")
      }

    )
  }

  salvar2(etapa:any){
    
    GlobalConstant.aprendizagemSelecionada.etapaIndice = 2;
    GlobalConstant.aprendizagemSelecionada.etapa2 = etapa;
    if(etapa == "X_X"){
      GlobalConstant.aprendizagemSelecionada.etapaIndice = 3;
    }

    this.aprendizagemService.editarAprendizagem().subscribe(
      data => {
        console.log("Editado com sucesso")
      },
      error => {
        console.log("Não editado com sucesso")
      }

    )
  }

  salvar3(etapa:any){
    
    GlobalConstant.aprendizagemSelecionada.etapaIndice = 3;
    GlobalConstant.aprendizagemSelecionada.etapa3 = etapa;
    if(etapa == "X_X"){
      GlobalConstant.aprendizagemSelecionada.etapaIndice = 4;
    }

    this.aprendizagemService.editarAprendizagem().subscribe(
      data => {
        console.log("Editado com sucesso")
      },
      error => {
        console.log("Não editado com sucesso")
      }

    )
  }

  salvar4(etapa:any){
    
    GlobalConstant.aprendizagemSelecionada.etapaIndice = 4;
    GlobalConstant.aprendizagemSelecionada.etapa4 = etapa;
    if(etapa == "X_X"){
      GlobalConstant.aprendizagemSelecionada.status = "Completo"
      GlobalConstant.aprendizagemSelecionada.etapaIndice = 5

    }

    this.aprendizagemService.editarAprendizagem().subscribe(
      data => {
        console.log("Editado com sucesso")
      },
      error => {
        console.log("Não editado com sucesso")
      }

    )
  }

}