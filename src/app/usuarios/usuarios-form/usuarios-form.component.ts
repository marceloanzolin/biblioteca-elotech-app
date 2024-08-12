import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuario;
  success:boolean = false;
  erros: string[];
  id:number;

  constructor(private service: UsuariosService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
  this.usuario = new Usuario();
  }

  ngOnInit(): void {

  let params: Observable<Params> = this.activatedRoute.params;
   params.subscribe(urlParams => {
          this.id = urlParams['id']
          if(this.id){
            this.service.getClientesById(this.id)
              .subscribe(
                response => this.usuario = response
              )
         } 
      }) ;
}

  onSubmit(){
    if(this.id){
        this.usuario.dataCadastro = this.converterData(this.usuario.dataCadastro);
        this.service.atualizar(this.usuario)
        .subscribe(response => {
          this.success = true;
          this.erros = [];
          this.router.navigate(['/usuarios/lista']);
        }, errorResponse => {
          this.erros = ['Erro ao atualizar o usuário']
        })
    }else{
      this.service.salvar(this.usuario).subscribe(response => {
        this.success = true;
        this.erros = [];
        this.usuario = response;
      },errorResponse => {
        this.success = false;
        this.erros = errorResponse.error.errors;
      });
    }
  }

  converterData(dateString: string): string {
    const [day, month, year] = dateString.split('/');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  voltarListagem(){
    this.router.navigate(['/usuarios/lista']);
  }
}
