import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GestaoUsuariosService } from 'src/app/services/gestao-usuarios.service';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Router } from '@angular/router';
import { Config } from 'src/app/model/config';

@Component({
  selector: 'app-variaveis-sistema',
  templateUrl: './variaveis-sistema.component.html',
  preserveWhitespaces: true,
  styleUrls: ['./variaveis-sistema.component.css']
})
export class VariaveisSistemaComponent implements OnInit {

  usuarios: Usuario[] = [];
  configs: Config[] = []
  titulo = "Gestão de Usuários";
  icone = "../../../assets/imgs/gestao-usuarios.JPG";
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: any;

  constructor(
    private router: Router,
    private gestaoUsuariosService: GestaoUsuariosService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    
    this.gestaoUsuariosService.listarConfigs().subscribe(
      dados => this.configs = dados      
     );

  }

  OnEditConfig(config : Config){
    GlobalConstant.configSelecionada = config;
    this.router.navigate(['/editar-configuracoes'])
  }

}
