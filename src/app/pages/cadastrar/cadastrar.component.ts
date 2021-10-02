import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/model/cargo';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Setor } from 'src/app/model/setor';
import { Usuario } from 'src/app/model/usuario';
import { CadastroService } from 'src/app/services/cadastro.service';
import { SetoresCargosService } from 'src/app/services/setores-cargos.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario = new Usuario();
  mensagemSucesso = "";
  mensagemErro: any;
  usuarioEmail: string = "";
  mensagemErroDominio = "";
  setores: Setor[] = [];
  cargos: Cargo[] = [];
  options: string[] = []
  



  constructor(
    private router: Router,
    private CadastroService: CadastroService,
    private SetoresCargosService: SetoresCargosService
  ) { }

  ngOnInit(): void {
    this.listarCargos();
    this.listarSetores();
    
  }

  cadastrar(f: any) {

    if (this.verificarEmail()) {
      this.CadastroService.RegisterUserFromRemote(this.usuario).subscribe(
        async data => {

          console.log("Resposta recebida");
          this.mensagemSucesso = "Cadastro realizado. Por favor, faça login.";
          this.mensagemErro = "";
          this.mensagemErroDominio = "";
          await this.sleep(2000);
          this.router.navigate(['/login'])

          //reset formulário
          //f.resetForm();

        },
        error => {

          console.log("Exceção aconteceu");
          this.mensagemErro = error.error;
          this.mensagemSucesso = ""
          this.mensagemErroDominio = ""
        }
      )
    } else

      this.mensagemErroDominio = "Dominio não autorizado! Favor utilizar " + GlobalConstant.dominio
    this.mensagemSucesso = ""
    this.mensagemErro = "";

  }

  verificarEmail() {
    return this.usuario.email.includes(GlobalConstant.dominio);
  }

  sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  listarSetores() {

    this.SetoresCargosService.listarSetores().subscribe(
      dados => {
        this.setores = dados

        var select = document.getElementById("setor")!;
        var el = document.createElement("option")
        el.textContent = "Informe seu cargo"
        el.setAttribute("selected", "selected")
        el.setAttribute("disabled", "disabled")
        select.appendChild(el)

        for (let dado of dados) {

          var opt = dado.setor;
          var el = document.createElement("option");
          el.setAttribute("style", "color: #1b1744;")
          el.textContent = opt;
          el.value = opt;

          select.appendChild(el);
        }
      }
    );

  }


  listarCargos() {
    this.SetoresCargosService.listarCargos().subscribe(
      dados => {
        this.cargos = dados

        var select = document.getElementById("cargo")!;

        var el = document.createElement("option")
        el.textContent = "Informe seu setor"
        el.setAttribute("disabled", "disabled")
        el.setAttribute("selected", "selected")
        el.setAttribute("hidden", "hidden")
        select.appendChild(el)

        for (let dado of dados) {

          var opt = dado.cargo;
          var el = document.createElement("option");
          el.setAttribute("style", "color: #1b1744;")
          el.textContent = opt;
          el.value = opt;

          select.appendChild(el);
        }

      }
    );
  }


}
