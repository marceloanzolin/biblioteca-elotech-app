import { Injectable } from '@angular/core';
import { Usuario } from './usuarios/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiURL:string = environment.apiUrlBase + 'usuarios';
  constructor(private http:HttpClient) { }
  
  salvar(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiURL}`, usuario);
  }

  getClientesById(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiURL}/${id}`);
  } 

  atualizar(usuario:Usuario): Observable<any>{
    return this.http.put<Usuario>(`${this.apiURL}/${usuario.id}`, usuario);
  }

  deletar(usuario:Usuario): Observable<any>{
    return this.http.delete<void>(`${this.apiURL}/${usuario.id}`);
  }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiURL}`);
  } 
}
