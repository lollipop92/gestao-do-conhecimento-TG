import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AprendizagemComponent } from './pages/aprendizagem/aprendizagem.component';
import { BaseConhecimentoComponent } from './pages/base-conhecimento/base-conhecimento.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'esqueciSenha', component: EsqueciSenhaComponent},
  {path: 'menu', component:MenuComponent, canActivate:[AuthGuard]},
  {path: 'userConfig' , component:UserConfigComponent, canActivate:[AuthGuard]},
  {path: 'base.conhecimento' , component:BaseConhecimentoComponent, canActivate:[AuthGuard]},
  {path: 'aprendizagem' , component:AprendizagemComponent, canActivate:[AuthGuard]},
  {path: 'monitor' , component:MonitorComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
