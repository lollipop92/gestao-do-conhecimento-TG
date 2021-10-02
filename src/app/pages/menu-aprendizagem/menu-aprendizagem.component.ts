import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aprendizagem } from 'src/app/model/aprendizagem';
import { Usuario } from 'src/app/model/usuario';
import { AprendizagemService } from 'src/app/services/aprendizagem.service';
import { BaseConhecimentoService } from 'src/app/services/base-conhecimento.service';
import { DatePipe } from '@angular/common';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { ProcessoEtapaService } from 'src/app/services/processo-etapa.service';
import { ProcessoEtapa } from 'src/app/model/processo-etapa';

@Component({
  selector: 'app-menu-aprendizagem',
  templateUrl: './menu-aprendizagem.component.html',
  styleUrls: ['./menu-aprendizagem.component.css'],
  preserveWhitespaces: true,
  providers: [DatePipe]
})
export class MenuAprendizagemComponent implements OnInit {

  constructor(
    private router: Router,
    private AprendizagemService: AprendizagemService,
    private BaseConhecimentoService: BaseConhecimentoService,
    private ProcessoEtapaService : ProcessoEtapaService,
    private datePipe: DatePipe
  ) { }

  titulo = "Aprendizagem";
  icone = "../../../assets/imgs/aprendizagem.JPG"
  aprendizagem = new Aprendizagem;
  listaAprendizagem: Aprendizagem[] = [];
  usuariosAutor: Usuario[] = [];
  mensagemSucesso = "";
  mensagemError = "";
  hoje:any = new Date();
  processosEtapas: ProcessoEtapa[] = [];
  processoEtapa = new ProcessoEtapa();
  options: string[] = []
  

  ngOnInit(): void {
    this.getListaAprendizagem();
    this.listarProcessosEtapas();
  }

  getListaAprendizagem() {
    this.AprendizagemService.getListaAprendizagem().subscribe(
      data => {

        this.listaAprendizagem = data

        for (let aprendizagem of this.listaAprendizagem) {

          this.BaseConhecimentoService.getUserFromRemote(aprendizagem.treinado).subscribe(
            data => {
              console.log(data.nome)
              aprendizagem.treinado = data.nome
            },
            error => {
              console.log("error")
            }
          )

          this.BaseConhecimentoService.getUserFromRemote(aprendizagem.treinador).subscribe(
            data => {
              console.log(data.nome)
              aprendizagem.treinador = data.nome
            },
            error => {
              console.log("error")
            }
          )

          switch (aprendizagem.etapaIndice) {
            case 1:
              aprendizagem.etapaIndice = "1 - Preparação";
              break;
            case 2:
              aprendizagem.etapaIndice = "2 - Introdução às operações";
              break;
            case 3:
              aprendizagem.etapaIndice = "3 - Analise do desempenho";
              break;
            case 3:
              aprendizagem.etapaIndice = "4 - Acompanhamento";
              break;
            default:
              aprendizagem.etapaIndice = "Completo";


          }


        }

      },

      error => {
        console.log("error")
      }
    )
  }


  criarAprendizagem() {

    this.aprendizagem.status = "Executando"
    this.aprendizagem.etapaIndice = 1    
    this.aprendizagem.etapa1 = "_"
    this.aprendizagem.etapa2 = "_"
    this.aprendizagem.etapa3 = "_"
    this.aprendizagem.etapa4 = "_"
    
    this.hoje = this.datePipe.transform(this.hoje, 'yyyy-MM-dd');
    this.aprendizagem.data = this.hoje;
    

    this.AprendizagemService.criarAprendizagem(this.aprendizagem).subscribe(
      async data => {
        this.mensagemSucesso = "Base de conhecimento criada com sucesso! Você será direcionado para lista.";
              this.mensagemError = "";
              await this.sleep(2000);
              this.getListaAprendizagem();
      },
      error => {
        this.mensagemError = "Não foi possivél criar a Base de Conhecimento, por favor tente mais tarde."
        this.mensagemSucesso = "";
        
      }
    )
  }

  sleep(ms:any){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  editarAprendiazagem(aprendizagem : Aprendizagem){
    GlobalConstant.aprendizagemSelecionada = aprendizagem
    this.router.navigate(['/aprendizagem'])
  }

  listarProcessosEtapas(){

    this.ProcessoEtapaService.listarProcessosEtapas().subscribe(
      dados => {        
        this.processosEtapas = dados
        
        var select = document.getElementById("processo")!;
        var select2 = document.getElementById("etapa")!;
        
        for (let dado of dados) {

          var opt = dado.processo;          
          var el = document.createElement("option");                    
          el.textContent = opt;
          el.value = opt; 
          select.appendChild(el);
          

          var opt2 = dado.etapa;
          var el2 = document.createElement("option");
          el2.textContent = opt2;
          el2.value = opt2;
          select2.appendChild(el2);      


        }

      }
    );
  }

}
