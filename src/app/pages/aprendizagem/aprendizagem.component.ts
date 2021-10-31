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
  message:string = "";
  messageType:string = "";
  

  constructor(
    public aprendizagemService : AprendizagemService
   ) { }

  titulo = "Aprendizagem";
  icone = "../../../assets/imgs/aprendizagem.JPG"

  ngOnInit(): void {
    this.aprendizagem = GlobalConstant.aprendizagemSelecionada
    this.etapaComponente = this.aprendizagem.etapaIndice;
    this.message = ""
  }

  etapa1(){
   this.etapaComponente = 1;
   this.message = ""   
    
  }
  etapa2(){
    this.etapaComponente = 2;
    this.message = ""
  }
  etapa3(){
    this.etapaComponente = 3;
    this.message = ""
  }
  etapa4(){
    this.etapaComponente = 4;
    this.message = ""
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
        this.message = "Alterado com sucesso.";
          this.messageType = "success"; 
      },
      error => {
        console.log("Não editado com sucesso")
        this.message = error.error;
        this.messageType = "error";
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
        this.message = "Alterado com sucesso.";
          this.messageType = "success";
      },
      error => {
        console.log("Não editado com sucesso")
        this.message = error.error;
        this.messageType = "error";
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
        this.message = "Alterado com sucesso.";
          this.messageType = "success";
      },
      error => {
        console.log("Não editado com sucesso")
        this.message = error.error;
        this.messageType = "error";
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
        this.message = "Alterado com sucesso.";
          this.messageType = "success";
      },
      error => {
        console.log("Não editado com sucesso")
        this.message = error.error;
        this.messageType = "error";
      }

    )
  }

}