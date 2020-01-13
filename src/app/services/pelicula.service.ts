import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2020, 'https://i.ytimg.com/vi/qSQTdrMSmSY/maxresdefault.jpg'),
            new Pelicula("Los Vengdores Endgame", 2019, 'https://as01.epimg.net/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg'),
            new Pelicula("Batman vs Superman", 2015, 'https://img.europapress.es/fotoweb/fotonoticia_20160322233405_1280.jpg')
          ];
    }

    holaMundo(){
        return "Hola Mundo desde un servicio de Angular !!!";
    }

    getPeliculas(){
        return this.peliculas;
    }
}