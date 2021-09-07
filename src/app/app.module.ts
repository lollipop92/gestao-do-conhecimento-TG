import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { BaseConhecimentoComponent } from './pages/base-conhecimento/base-conhecimento.component';
import { AprendizagemComponent } from './pages/aprendizagem/aprendizagem.component';
import { MonitorComponent } from './pages/monitor/monitor.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    CadastrarComponent,
    EsqueciSenhaComponent,
    MenuComponent,
    UserConfigComponent,
    BaseConhecimentoComponent,
    AprendizagemComponent,
    MonitorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
