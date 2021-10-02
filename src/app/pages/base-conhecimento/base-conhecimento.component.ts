import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { BaseConhecimento } from 'src/app/model/base-conhecimento';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Usuario } from 'src/app/model/usuario';
import { BaseConhecimentoService } from 'src/app/services/base-conhecimento.service';


@Component({
  selector: 'app-base-conhecimento',
  templateUrl: './base-conhecimento.component.html',
  styleUrls: ['./base-conhecimento.component.css']
})
export class BaseConhecimentoComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  fluxograma?: File; // Variable to store file

  constructor(
    private router: Router,
    private BaseConhecimentoService:BaseConhecimentoService
  ) { }

  titulo = "Base de Conhecimento";
  icone = "../../../assets/imgs/baseConhecimento.JPG"
  baseConhecimento = new BaseConhecimento();
  mensagemSucesso = "";
  mensagemError = ""; 

    

  ngOnInit(): void {
    this.baseConhecimento.processo = GlobalConstant.processoBaseConhecimento 
    this.baseConhecimento.etapa = GlobalConstant.etapaBaseConhecimento
    this.baseConhecimento.vigencia = GlobalConstant.vigenciaBaseConhecimento    
    
  }

  onChange(event:any) { 

      this.baseConhecimento.fluxograma = event.target.files[0]; 
    
  }

  criarBaseConhecimento(){     
    
    let usuario:any = sessionStorage.getItem("usuario");
    usuario = Object.assign(new Usuario(), JSON.parse(usuario));
    
        this.baseConhecimento.autor = usuario.id;
        this.BaseConhecimentoService.criarBaseConhecimento(this.baseConhecimento).subscribe(
          async data => {
              this.mensagemSucesso = "Base de conhecimento criada com sucesso! Você será direcionado para lista.";
              this.mensagemError = "";
              await this.sleep(2000);
              this.router.navigate(['/menu_base-conhecimento'])

            },
            error => {
              this.mensagemError = "Não foi possivél criar a Base de Conhecimento, por favor tente mais tarde."
              this.mensagemSucesso = "";
            }
        );
    }

    sleep(ms:any){
      return new Promise(resolve => setTimeout(resolve, ms));
    }


  
       

}
