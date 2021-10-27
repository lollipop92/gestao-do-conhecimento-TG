import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { AprendizagemComponent } from '../aprendizagem/aprendizagem.component';

@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.css']
})
export class Etapa2Component implements OnInit {

  public saveMestre : boolean = false; 
  public saveAprendiz : boolean = false;
  public etapa2 : any ;
  public etapa : any = GlobalConstant.aprendizagemSelecionada.etapa2;


  constructor(
    private aprendizagem : AprendizagemComponent
  ) { }

  ngOnInit(): void {
    this.carregar(); 
  }

  onSaveMestreChanged(value:boolean){
    this.saveMestre = value;
  }

  onSaveAprendizChanged(value:boolean){
    this.saveAprendiz = value;
  }

  salvar() {    
    
    if(this.saveMestre == true && this.saveAprendiz == true)
    {
      this.etapa2 = "X_X" 
    }
    if(this.saveMestre == false && this.saveAprendiz == true)
    {
      this.etapa2 = "_X" 
    }
    if(this.saveMestre == true && this.saveAprendiz == false)
    {
      this.etapa2 = "X_" 
    }
    if(this.saveMestre == false && this.saveAprendiz == false)
    {
      this.etapa2 = "_" 
    }

    this.aprendizagem.salvar2(this.etapa2);
  }

  carregar() {    
    
    if(this.etapa == "X_X")
    {      
      this.saveMestre = true 
      this.saveAprendiz = true      
    }
    if(this.etapa == "_X")
    {
      this.saveMestre = false 
      this.saveAprendiz = true
    }
    if(this.etapa == "X_")
    {
      this.saveMestre = true 
      this.saveAprendiz = false
    }
    if(this.etapa == "_")
    {       
      this.saveMestre = false 
      this.saveAprendiz = false
    }    
  }


}
