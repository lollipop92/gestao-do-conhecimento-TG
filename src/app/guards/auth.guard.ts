import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }


  canActivate(): Observable<boolean> | boolean {

    let usuario: any = sessionStorage.getItem("usuario");

    if (usuario != null && usuario.trim() != "") {

      usuario = Object.assign(new Usuario(), JSON.parse(usuario));

    } else {

      usuario = null;

      this.router.navigateByUrl("/login");

    }

    return (usuario != null);

  }

}