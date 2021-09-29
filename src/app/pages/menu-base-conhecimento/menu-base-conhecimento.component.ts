import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseConhecimento } from 'src/app/model/base-conhecimento';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Usuario } from 'src/app/model/usuario';
import { BaseConhecimentoService } from 'src/app/services/base-conhecimento.service';
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
    
  ) { }

  titulo = "Base de Conhecimento";
  icone = "../../../assets/imgs/baseConhecimento.JPG"
  baseConhecimento = new BaseConhecimento();
  basesConhecimento : BaseConhecimento[] = [];
  usuariosAutor : Usuario[] = []

  ngOnInit(): void {
    this.getBasesConhecimento();
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

}
