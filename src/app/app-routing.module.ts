import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';


const routes: Routes = [
  { path: '', component: LayoutComponent,children:[
      { path: 'home', component: HomeComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
