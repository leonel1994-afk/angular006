import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo.interface';
//Interfaz para el componente

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulos:Array<Articulo>=new Array<Articulo>();
 
 //Inyeccion de dependencias con la clase:  Router
  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.articulos.push(
    {
      nombre: 'PC con Windows 10',
      descripcion: 'Marca Lenovo',
      precio: 900,
      stock: 100,
      precioMayorista:345
    },
    {
      nombre:"Mack Book Pro",
      descripcion:"Lapto con pantalla de apple",
      precio:2000,
      stock:12,
      precioMayorista:345
    },
    {
      nombre:"Tabled de 10 pulgadas",
      descripcion:"Marca Samsung 2da Generación",
      precio:100,
      stock:12,
      precioMayorista:345
    },
    );
  }
pasarParametro(item: Articulo){
  //console.log(item);
  console.log(item);

  //convertir el parametro "item "de tipo "Articulo" ques es un objeto "JSON" a string
  this.ruta.navigate(['articulodetalle',
  { articuloJSON: JSON.stringify(item)},
 ]);
}
}
