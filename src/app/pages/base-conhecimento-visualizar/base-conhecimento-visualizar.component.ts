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

  ngOnInit(): void {
    this.baseConhecimento = GlobalConstant.baseConhecimentoSelecionada
  }

  onChange(event:any) { 

    this.file = event.target.files[0]; 
  
}

}
