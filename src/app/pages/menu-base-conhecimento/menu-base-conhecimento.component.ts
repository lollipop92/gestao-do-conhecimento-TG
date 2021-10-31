import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { BaseConhecimento } from 'src/app/model/base-conhecimento';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { ProcessoEtapa } from 'src/app/model/processo-etapa';
import { Usuario } from 'src/app/model/usuario';
import { BaseConhecimentoService } from 'src/app/services/base-conhecimento.service';
import { ProcessoEtapaService } from 'src/app/services/processo-etapa.service';
import { UserConfigService } from 'src/app/services/user-config.service';



@Component({
  selector: 'app-menu-base-conhecimento',
  templateUrl: './menu-base-conhecimento.component.html',
  styleUrls: ['./menu-base-conhecimento.component.css']
})
export class MenuBaseConhecimentoComponent implements OnInit {

  constructor(
    private router: Router, 
    private BaseConhecimentoService:BaseConhecimentoService,
    private UserConfigService:UserConfigService,
    private ProcessoEtapaService : ProcessoEtapaService,
    private modalService: BsModalService
    
  ) { }

  titulo = "Base de Conhecimento";
  icone = "../../../assets/imgs/baseConhecimento.JPG"
  baseConhecimento = new BaseConhecimento();
  basesConhecimento : BaseConhecimento[] = [];
  usuariosAutor : Usuario[] = []
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: any;
  processosEtapas: ProcessoEtapa[] = [];
  processoEtapa = new ProcessoEtapa();
  options: string[] = []


  ngOnInit(): void {
    this.getBasesConhecimento();
    this.listarProcessosEtapas();
  }

  criar(form:any){

    GlobalConstant.processoBaseConhecimento = this.baseConhecimento.processo
    GlobalConstant.etapaBaseConhecimento = this.baseConhecimento.etapa
    GlobalConstant.vigenciaBaseConhecimento = this.baseConhecimento.vigencia

    this.router.navigate(['/base-conhecimento'])

    
  }

  getBasesConhecimento(){
    this.BaseConhecimentoService.getBaseConhecimento().subscribe(
      data => {    
                 
         this.basesConhecimento = data;

         for(let baseConhecimento of this.basesConhecimento){

          this.BaseConhecimentoService.getUserFromRemote(baseConhecimento.autor).subscribe(
            data => {
              console.log(data.nome) 
              baseConhecimento.autorNome = data.nome       
            },
            error =>{
              console.log("error")
            } 
          )              
          
      }
    },         
      
      error =>{
        console.log("error")
      }
    )
  } 

  visualizar(baseConhecimento:BaseConhecimento){
    GlobalConstant.baseConhecimentoSelecionada = baseConhecimento
    this.router.navigate(['/base-conhecimento-visualizar'])
  }

  editar(baseConhecimento:BaseConhecimento){
    GlobalConstant.baseConhecimentoSelecionada = baseConhecimento
    GlobalConstant.baseConhecimentoEditar = true
    this.router.navigate(['/base-conhecimento-visualizar'])
  }

  deletar(baseConhecimento:BaseConhecimento){
    GlobalConstant.baseConhecimentoSelecionada = baseConhecimento
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.BaseConhecimentoService.remover().subscribe(
      data => {
        console.log(data);
        this.getBasesConhecimento();
        this.deleteModalRef?.hide();

      });
  }

  onDeclineDelete() {
    this.deleteModalRef?.hide();
  }

  listarProcessosEtapas(){

    this.ProcessoEtapaService.listarProcessosEtapas().subscribe(
      dados => {        
        this.processosEtapas = dados
        
        var select = document.getElementById("processo")!;
        var el = document.createElement("option")
        select.appendChild(el);

        var select2 = document.getElementById("etapa")!;
        var el2 = document.createElement("option")
        select2.appendChild(el2);
        
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

}
