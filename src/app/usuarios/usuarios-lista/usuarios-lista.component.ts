import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

usuarios:Usuario[] = []; 
usuarioSelecionado:Usuario;
mensagemSucesso:string;
mensagemErro:string;
  constructor(
    private service:UsuariosService,
    private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(response => this.usuarios = response);
  }

  novoCadastro(){
    this.router.navigate(['/usuarios/form']);
  }

  preparaDelecao(usuario:Usuario){
    this.usuarioSelecionado = usuario;
  }

  deletarUsuario(){
   this.service.deletar(this.usuarioSelecionado)
   .subscribe(response => { this.mensagemSucesso = 'Usuário deletado com sucesso'
            this.ngOnInit(); 
              },
   erro => this.mensagemErro = 'Ocorreu um erro ao deletar o usuário');
  }
}
