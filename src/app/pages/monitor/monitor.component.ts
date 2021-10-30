import { Component, OnInit } from '@angular/core';
import { Aprendizagem } from 'src/app/model/aprendizagem';
import { AprendizagemService } from 'src/app/services/aprendizagem.service';
import { BaseConhecimentoService } from 'src/app/services/base-conhecimento.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  processos:{nome:string,etapas:Aprendizagem[]}[] = [];

  constructor(
    private baseConhecimentoService:BaseConhecimentoService,
    private aprendizagemService:AprendizagemService
  ) { }

  titulo = "Monitor";
  icone = "../../../assets/imgs/monitor.JPG"

  ngOnInit(): void {
    this.getListaAprendizagem();
  }

  getListaAprendizagem() {
    this.aprendizagemService.getListaAprendizagem().toPromise().then((listaAprendizagem:Aprendizagem[]) => {
      
      listaAprendizagem.forEach(aprendizagem => {
        this.baseConhecimentoService.getUserFromRemote(aprendizagem.treinado).toPromise().then(data => {
          aprendizagem.treinadoNome = data.nome       
        }).catch(error => {
          console.log(error);
        });
        this.baseConhecimentoService.getUserFromRemote(aprendizagem.treinador).toPromise().then(data => {
          aprendizagem.treinadorNome = data.nome       
        }).catch(error => {
          console.log(error);
        });
      });
      
      this.processos = []
      for(let aprendizagem of listaAprendizagem){
        let processo = this.processos.find(processo => processo.nome == aprendizagem.processo);
        if(processo != null){
          processo.etapas.push(aprendizagem);
        }else{
          this.processos.push({nome:aprendizagem.processo, etapas:[aprendizagem]});
        }
      }
    }).catch(error => {
      console.log(error);
    });
  } 

  getFirstLetter(text:string):string{
    if(text != null && typeof text == "string")
      return text.charAt(0);
    else
      return text;
  }

  getStatusStyle(status:string):any{
    let style:any = {};
    switch(status){
      case "Executando":
        style["background-color"]="#1366ff";
        break;
      case "Completo":
        style["background-color"]="#47b92f";
        break;
      case "Parado":
        style["background-color"]="#ffba2e";
        break;
      case "Cancelado":
        style["background-color"]="#ff4040";
        break;
    }
    return style;
  }

}
