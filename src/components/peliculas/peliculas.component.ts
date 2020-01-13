import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = "Componente películas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
   }

  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente Iniciado !!!");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck() {
    console.log("DoCheck lanzado!!!");
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado!!";
  }

  ngOnDestroy() {
    console.log("Mi componente se va a eliminar");
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }
}
