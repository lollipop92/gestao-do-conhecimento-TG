import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GestaoUsuariosService } from 'src/app/services/gestao-usuarios.service';
import { GlobalConstant } from 'src/app/model/globalConstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestao-usuarios',
  templateUrl: './gestao-usuarios.component.html',
  preserveWhitespaces: true,
  styleUrls: ['./gestao-usuarios.component.css']
})
export class GestaoUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  titulo = "Gestão de Usuários";
  icone = "../../../assets/imgs/gestao-usuarios.JPG";
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: any;



  constructor(
    private router: Router,
    private gestaoUsuariosService: GestaoUsuariosService,
    private modalService: BsModalService) { }


  ngOnInit(): void {
    this.gestaoUsuariosService.listarUsuarios().subscribe(
      dados => this.usuarios = dados
    );
  }

  onDelete(usuario: Usuario) {
    GlobalConstant.usuarioSelecionado = usuario;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.gestaoUsuariosService.remover().subscribe(
      data => {
        console.log(data);
        this.onRefresh();
        this.deleteModalRef?.hide();

      });
  }

  onDeclineDelete() {
    this.deleteModalRef?.hide();
  }

  onRefresh() {
     this.gestaoUsuariosService.listarUsuarios().subscribe(
      dados => this.usuarios = dados
    );
  }

  onEdit(usuario: Usuario) {
    GlobalConstant.usuarioSelecionado = usuario;
    console.log(GlobalConstant.usuarioSelecionado);
    this.router.navigate(['/editar-usuario'])
  }

}
