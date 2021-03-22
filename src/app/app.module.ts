import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { TitulosComponent } from './titulos/titulos.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { CrearusuariosComponent } from './usuarios/crearusuarios/crearusuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaerrorComponent,
    TitulosComponent,
    EjemploComponent,
    NavbarComponent,
    PiepaginaComponent,
    DirectivasComponent,
    UsuariosComponent,
    EditarusuariosComponent,
    CrearusuariosComponent,
    ArticuloComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
