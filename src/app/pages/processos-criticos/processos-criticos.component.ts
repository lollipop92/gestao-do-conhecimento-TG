import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessoEtapa } from 'src/app/model/processo-etapa';
import { ProcessoEtapaService } from 'src/app/services/processo-etapa.service';

@Component({
  selector: 'app-processos-criticos',
  templateUrl: './processos-criticos.component.html',
  preserveWhitespaces: true,
  styleUrls: ['./processos-criticos.component.css']
})
export class ProcessosCriticosComponent implements OnInit {

  processosEtapas: ProcessoEtapa[] = [];
  processoEtapa = new ProcessoEtapa();

  constructor(
    private router: Router,
    private ProcessoEtapaService : ProcessoEtapaService
  ) { }

  ngOnInit(): void {
    this.listarProcessosEtapas();
  }

  criarProcessoEtapa(){
    this.ProcessoEtapaService.criarProcessoEtapa(this.processoEtapa).subscribe(
      data => {
         this.listarProcessosEtapas();
      }
    );
  }

  listarProcessosEtapas(){

    this.ProcessoEtapaService.listarProcessosEtapas().subscribe(
      dados => {        
        this.processosEtapas = dados        
      }
    );
  }

  onDeleteProcessoEtapa(processoEtapa : ProcessoEtapa){
    this.ProcessoEtapaService.onDeleteProcessoEtapa(processoEtapa).subscribe(
      data => {
         this.listarProcessosEtapas();
      }
    );
  }
}
