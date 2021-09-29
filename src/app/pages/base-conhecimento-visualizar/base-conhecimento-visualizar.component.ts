import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { BaseConhecimento } from 'src/app/model/base-conhecimento';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { BaseConhecimentoService } from 'src/app/services/base-conhecimento.service';


@Component({
  selector: 'app-base-conhecimento-visualizar',
  templateUrl: './base-conhecimento-visualizar.component.html',
  styleUrls: ['./base-conhecimento-visualizar.component.css']
})
export class BaseConhecimentoVisualizarComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file?: File; // Variable to store file

  constructor(
    private router: Router,
    private BaseConhecimentoService:BaseConhecimentoService
  ) { }

  titulo = "Base de Conhecimento";
  icone = "../../../assets/imgs/baseConhecimento.JPG"
  baseConhecimento = new BaseConhecimento();
  mensagemSucesso = "";
  mensagemError = ""; 
  isEdit: boolean = false;
  isExibir: boolean = true;

  ngOnInit(): void {
    this.isEdit = false;
    this.isExibir = true;

    if (GlobalConstant.baseConhecimentoEditar) {
      this.isEdit = true;
      this.isExibir = false;
      GlobalConstant.baseConhecimentoEditar = false;
    }
    this.baseConhecimento = GlobalConstant.baseConhecimentoSelecionada
  }

  onChange(event:any) { 

    this.file = event.target.files[0]; 
  
}

editarBaseConhecimento(){

  this.BaseConhecimentoService.criarBaseConhecimento(this.baseConhecimento).subscribe(
    async data => {
        this.mensagemSucesso = "Base de conhecimento editada com sucesso! Você será direcionado para lista.";
        this.mensagemError = "";
        await this.sleep(2000);
        this.router.navigate(['/menu_base-conhecimento'])

      },
      error => {
        this.mensagemError = "Não foi possivél editar a Base de Conhecimento, por favor tente mais tarde."
        this.mensagemSucesso = "";
      }
      
  );

}

sleep(ms:any){
  return new Promise(resolve => setTimeout(resolve, ms));
}

}
