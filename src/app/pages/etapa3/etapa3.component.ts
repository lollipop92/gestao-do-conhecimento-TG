import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { AprendizagemComponent } from '../aprendizagem/aprendizagem.component';


@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.css']
})
export class Etapa3Component implements OnInit {

  public saveMestre : boolean = false; 
  public saveAprendiz : boolean = false;
  public etapa3 : any ;
  public etapa : any = GlobalConstant.aprendizagemSelecionada.etapa3;

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
      this.etapa3 = "X_X" 
    }
    if(this.saveMestre == false && this.saveAprendiz == true)
    {
      this.etapa3 = "_X" 
    }
    if(this.saveMestre == true && this.saveAprendiz == false)
    {
      this.etapa3 = "X_" 
    }
    if(this.saveMestre == false && this.saveAprendiz == false)
    {
      this.etapa3 = "_" 
    }

    this.aprendizagem.salvar3(this.etapa3);
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



