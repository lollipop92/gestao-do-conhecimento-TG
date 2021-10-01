import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AprendizagemComponent } from './pages/aprendizagem/aprendizagem.component';
import { BaseConhecimentoVisualizarComponent } from './pages/base-conhecimento-visualizar/base-conhecimento-visualizar.component';
import { BaseConhecimentoComponent } from './pages/base-conhecimento/base-conhecimento.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EditarConfigComponent } from './pages/editar-config/editar-config.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { FundoTelaBotoesComponent } from './pages/fundo-tela-botoes/fundo-tela-botoes.component';
import { GestaoUsuariosComponent } from './pages/gestao-usuarios/gestao-usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { LogsComponent } from './pages/logs/logs.component';
import { MenuAprendizagemComponent } from './pages/menu-aprendizagem/menu-aprendizagem.component';
import { MenuBaseConhecimentoComponent } from './pages/menu-base-conhecimento/menu-base-conhecimento.component';
import { MenuConfigComponent } from './pages/menu-config/menu-config.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'esqueci-senha', component: EsqueciSenhaComponent},
  {path: 'menu', component:MenuComponent },
  {path: 'user-config' , component:UserConfigComponent, canActivate:[AuthGuard]},
  {path: 'base-conhecimento' , component:BaseConhecimentoComponent},
  {path: 'base-conhecimento-visualizar' , component:BaseConhecimentoVisualizarComponent},
  {path: 'menu_base-conhecimento' , component:MenuBaseConhecimentoComponent},
  {path: 'aprendizagem' , component:AprendizagemComponent},
  {path: 'menu_aprendizagem' , component:MenuAprendizagemComponent},
  {path: 'monitor' , component:MonitorComponent},
  {path: 'logs', component:LogsComponent},
  {path: 'gestao-usuarios', component:GestaoUsuariosComponent},
  {path: 'fundo-tela-botoes', component:FundoTelaBotoesComponent},
  {path: 'editar-usuario', component:EditarUsuarioComponent},
  {path: 'editar-configuracoes', component:EditarConfigComponent},
  {path: 'menu-configuracoes', component:MenuConfigComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
