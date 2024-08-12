import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    UsuariosModule
   
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
