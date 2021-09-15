import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/model/config';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { EditarConfigService } from 'src/app/services/editar-config.service';

@Component({
  selector: 'app-editar-config',
  templateUrl: './editar-config.component.html',
  styleUrls: ['./editar-config.component.css']
})
export class EditarConfigComponent implements OnInit {

  config = new Config();
  mensagemSucesso = "";
  mensagemError = "";
  titulo = "Editar Configurações";
  icone = "../../../assets/imgs/gestao-usuarios.JPG";

  constructor(
    private router: Router,
    private editarConfigService : EditarConfigService
  ) { }

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig(){
    this.editarConfigService.getConfigFromRemote(GlobalConstant.configSelecionada).subscribe(
      data => this.config = data

    );
  }

  editarConfig(){
    
    this.editarConfigService.editConfigFromRemote(this.config).subscribe(
      data => {
        
        console.log("Resposta recebida");
        this.mensagemSucesso = "Configuração atualizada com sucesso";
        if (this.config.id = 1)
        {
          GlobalConstant.dominio = this.config.valueConfig;
        }
      },

      error => {
        
        console.log("Exceção aconteceu");
        this.mensagemError = "Não foi possivél atualizar a configuração."
      }
    );
  }

}
