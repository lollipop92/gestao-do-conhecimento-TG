import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UserConfigService } from 'src/app/services/user-config.service';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {
  
  usuario: any = {  
      nome : null, 
     email : null, 
     senha : null,
     senhaConfirmar : null,
     setor : null, 
     cargo : null
    }

        
  constructor(
    private router: Router,
    private UserConfigService:UserConfigService

  ) { }

  ngOnInit(): void {

    this.usuario = this.UserConfigService.getUser()
  }

  saveUser(){
    
  }
  editUser(){
    
  }

}
