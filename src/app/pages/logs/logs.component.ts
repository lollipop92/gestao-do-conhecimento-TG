import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GestaoUsuariosService } from 'src/app/services/gestao-usuarios.service';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Router } from '@angular/router';
import { Config } from 'src/app/model/config';
import { Logs } from 'src/app/model/logs';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: Logs[] = [];
  logViewLog: Logs = {
    id:null,
    acao: "Visualizar",
    timeStamp:"",
    idUsuario:"1",
    entidade:"Logs",
    descricao:"Usuario visualizou tabela de logs" 
  }
  titulo = "Logs do Sistema";
  icone = "../../../assets/imgs/logs.JPG"

  constructor(
    private router: Router,
    private logsService : LogsService
  ) { }

  ngOnInit(): void {
    this.logsService.listarLogs().subscribe(
      dados => { 
        this.logs = dados
        console.log(this.logs)
        this.registrarLog(this.logViewLog);
      }
    );
  }

  registrarLog(log : Logs){
    this.logsService.registrarLog(log).subscribe(
      data => console.log("log registrado")
    )
  }

}
