import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente implements OnInit{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;
    
    constructor(){
        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es mi primer componente";
        this.year = 2010;
        this.mostrarPeliculas = true;
        console.log("Componente mi-componente cargado !!");
        console.log(this.comentario, this.titulo, this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
    
    ngOnInit(){
        
    }
}