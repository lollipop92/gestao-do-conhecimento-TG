import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/model/config';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Logs } from 'src/app/model/logs';
import { EditarConfigService } from 'src/app/services/editar-config.service';
import { LogsService } from 'src/app/services/logs.service';
import { LogsComponent } from '../logs/logs.component';
import { HttpClientModule } from '@angular/common/http';
import { Usuario } from 'src/app/model/usuario';

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

  logViewConfig: Logs = {
    id: null,
    acao: "Visualizar",
    timeStamp: "",
    idUsuario: null,
    entidade: "Configurações",
    descricao: "Usuario visualizou tabela de configurações"
  }

  logChangeConfig: Logs = {
    id: null,
    acao: "Edição",
    timeStamp: "",
    idUsuario: null,
    entidade: "Configurações",
    descricao: "Usuario editou tabela de configurações"
  }

  constructor(
    private router: Router,
    private editarConfigService: EditarConfigService,
    private logsService: LogsService
  ) {
    let usuario: any = sessionStorage.getItem("usuario");
    usuario = Object.assign(new Usuario(), JSON.parse(usuario));
    this.logChangeConfig.idUsuario = usuario.id;
    this.logViewConfig.idUsuario = usuario.id;
  }

  ngOnInit(): void {
    this.getConfig();
  }



  getConfig() {
    this.editarConfigService.getConfigFromRemote(GlobalConstant.configSelecionada).subscribe(
      data => {
        this.registrarLog(this.logViewConfig);
        this.config = data
      }
    );
  }

  editarConfig() {

    this.editarConfigService.editConfigFromRemote(this.config).subscribe(
      data => {

        console.log("Resposta recebida");
        this.mensagemSucesso = "Configuração atualizada com sucesso";
        this.registrarLog(this.logChangeConfig);
        if (this.config.id = 1) {
          GlobalConstant.dominio = this.config.valueConfig;
        }
      },

      error => {

        console.log("Exceção aconteceu");
        this.mensagemError = "Não foi possivél atualizar a configuração."
      }
    );
  }

  registrarLog(log: Logs) {
    this.logsService.registrarLog(log).subscribe(
      data => console.log("log registrado")
    )
  }

}
