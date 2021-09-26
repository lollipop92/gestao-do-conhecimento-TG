import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { BaseConhecimento } from 'src/app/model/base-conhecimento';
import { GlobalConstant } from 'src/app/model/globalConstants';
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
  file?: File; // Variable to store file

  constructor(
    private router: Router,
    private BaseConhecimentoService:BaseConhecimentoService
  ) { }

  titulo = "Base de Conhecimento";
  icone = "../../../assets/imgs/baseConhecimento.JPG"
  baseConhecimento = new BaseConhecimento();

    

  ngOnInit(): void {
    this.baseConhecimento.processo = GlobalConstant.processoBaseConhecimento 
    this.baseConhecimento.etapa = GlobalConstant.etapaBaseConhecimento
    this.baseConhecimento.vigencia = GlobalConstant.vigenciaBaseConhecimento
    
  }

  onChange(event:any) { 

      this.file = event.target.files[0]; 
    
  }

  criarBaseConhecimento(){ 
    
    this.loading = !this.loading;
        console.log(this.file);
        this.BaseConhecimentoService.criarBaseConhecimento(this.file, this.baseConhecimento).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }
       

}
