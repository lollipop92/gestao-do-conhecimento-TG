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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { BaseConhecimentoComponent } from './pages/base-conhecimento/base-conhecimento.component';
import { AprendizagemComponent } from './pages/aprendizagem/aprendizagem.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { LogsComponent } from './pages/logs/logs.component';
import { GestaoUsuariosComponent } from './pages/gestao-usuarios/gestao-usuarios.component';
import { FundoTelaBotoesComponent } from './pages/fundo-tela-botoes/fundo-tela-botoes.component';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { EditarConfigComponent } from './pages/editar-config/editar-config.component';
import { Etapa1Component } from './pages/etapa1/etapa1.component';
import { Etapa2Component } from './pages/etapa2/etapa2.component';
import { Etapa3Component } from './pages/etapa3/etapa3.component';
import { Etapa4Component } from './pages/etapa4/etapa4.component';
import { MenuAprendizagemComponent } from './pages/menu-aprendizagem/menu-aprendizagem.component';
import { MenuBaseConhecimentoComponent } from './pages/menu-base-conhecimento/menu-base-conhecimento.component';
import { BaseConhecimentoVisualizarComponent } from './pages/base-conhecimento-visualizar/base-conhecimento-visualizar.component';



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
    LogsComponent,
    GestaoUsuariosComponent,
    FundoTelaBotoesComponent,
    EditarUsuarioComponent,
    EditarConfigComponent,
    Etapa1Component,
    Etapa2Component,
    Etapa3Component,
    Etapa4Component,
    MenuAprendizagemComponent,
    MenuBaseConhecimentoComponent,
    BaseConhecimentoVisualizarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginComponent, AuthGuard,BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
