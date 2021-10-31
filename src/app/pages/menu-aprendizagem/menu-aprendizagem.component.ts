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
import { UserConfigService } from 'src/app/services/user-config.service';


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
    private ProcessoEtapaService: ProcessoEtapaService,
    private UserConfigService: UserConfigService,
    private datePipe: DatePipe
  ) { }

  titulo = "Aprendizagem";
  icone = "../../../assets/imgs/aprendizagem.JPG"
  aprendizagem = new Aprendizagem;
  listaAprendizagem: Aprendizagem[] = [];
  listaAprendizagemAntes: Aprendizagem[] = [];
  usuariosAutor: Usuario[] = [];
  message = "";
  messageType = "";
  hoje: any = new Date();
  processosEtapas: ProcessoEtapa[] = [];
  processoEtapa = new ProcessoEtapa();
  options: string[] = [];
  usuario = new Usuario();


  ngOnInit(): void {
    this.getListaAprendizagem();
    this.listarProcessosEtapas();

  }

  getUser() {

    this.UserConfigService.getUserFromRemote().subscribe(
      data => {
        this.usuario = data;

      }

    );
  }

  getListaAprendizagem() {

    this.getUser();

    this.AprendizagemService.getListaAprendizagem().subscribe(
      data => {

        this.listaAprendizagemAntes = data

        for (let aprendizagemAntes of this.listaAprendizagemAntes) {

          if (aprendizagemAntes.treinado == this.usuario.id || aprendizagemAntes.treinador == this.usuario.id) {
            this.listaAprendizagem.push(aprendizagemAntes);
          }

        }

        for (let aprendizagem of this.listaAprendizagem) {

          this.BaseConhecimentoService.getUserFromRemote(aprendizagem.treinado).subscribe(
            data => {
              aprendizagem.treinadoNome = data.nome
            },
            error => {
              console.log("error")
            }
          )

          this.BaseConhecimentoService.getUserFromRemote(aprendizagem.treinador).subscribe(
            data => {
              aprendizagem.treinadorNome = data.nome
            },
            error => {
              console.log("error")
            }
          )

          switch (aprendizagem.etapaIndice) {
            case 1:
              aprendizagem.etapaIndiceNome = "1 - Preparação";
              break;
            case 2:
              aprendizagem.etapaIndiceNome = "2 - Introdução às operações";
              break;
            case 3:
              aprendizagem.etapaIndiceNome = "3 - Analise do desempenho";
              break;
            case 4:
              aprendizagem.etapaIndiceNome = "4 - Acompanhamento";
              break;
            default:
              aprendizagem.etapaIndiceNome = "Completo";


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

    this.UserConfigService.checkUserFromRemote(this.aprendizagem.treinado).subscribe(
      data => {

        this.UserConfigService.checkUserFromRemote(this.aprendizagem.treinador).subscribe(
          data => {
            this.AprendizagemService.criarAprendizagem(this.aprendizagem).subscribe(
              async data => {

                this.getListaAprendizagem();

                console.log("Criado com sucesso.")
                this.message = "Criado com sucesso.";
                this.messageType = "success";
              },
              error => {
                console.log("Não foi possivél criar o processo de aprendizagem, por favor tente mais tarde.")
                this.message = "Não foi possivél criar o processo de aprendizagem, por favor tente mais tarde.";
                this.messageType = "error";

              }
            )


          },
          error => {
            console.log("Treinador não existe")
            this.message = "Treinador não localizado";
            this.messageType = "error";

          }

        );


      },
      error => {

        console.log("Treinado não existe")
        this.message = "Treinado não localizado";
        this.messageType = "error";

      }

    );


  }

  sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  editarAprendiazagem(aprendizagem: Aprendizagem) {
    GlobalConstant.aprendizagemSelecionada = aprendizagem
    this.router.navigate(['/aprendizagem'])
  }

  listarProcessosEtapas() {

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

  myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue

    input = (<HTMLInputElement>document.getElementById("myInput")).value;
    console.log(input)
    if (input != null) {
      filter = input.toUpperCase();
      table = document.getElementById("myTable");
      if (table != null) {
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
    }
  }

  sortTable() {
    var table, rows , switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable") as HTMLTableElement;
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      if (table != null) {

        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[0];
          y = rows[i + 1].getElementsByTagName("TD")[0];
          // Check if the two rows should switch place:
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode!.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
    }
  }

}
