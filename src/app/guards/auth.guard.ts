import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import{ LoginComponent} from './../pages/login/login.component'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginComponent: LoginComponent,
    private router: Router 
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log(this.loginComponent.usuarioEstaAutenticado())
    if (this.loginComponent.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login'])
    return false;

  }


}
