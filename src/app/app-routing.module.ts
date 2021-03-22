import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearusuariosComponent } from './usuarios/crearusuarios/crearusuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

const routes: Routes = [
  {path:'',component:TitulosComponent},
  {path:'ejemplo',component:EjemploComponent},
  {path:'usuarios',component:UsuariosComponent,
children:[
  {path:'crearusurio',component:CrearusuariosComponent},
  {path:'editusurio',component:EditarusuariosComponent},

]},
{
  path:'articulo',
  component:ArticuloComponent
},


{
  path:'articulodetalle'
  ,component:ArticuloDetalleComponent
},
  
{path:'directivas',component:DirectivasComponent},
  {
    path:'**',component:PaginaerrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
