import { Movie } from "./movie";
import { Professional } from "./Professional";
import {pro1, pro2, pro3, pro4, pro5, pro6} from "./professionalTest"
let fs = require('fs')

export class Imdb{
    push(peliX: Movie) {
    }
    public peliculas:Movie[];


    constructor(peliculas:Movie[]){
        this.peliculas = peliculas
    } 

public escribirEnFicheroJSON(nombreFichero:string){
    let myJson = JSON.stringify(this.peliculas)
    fs.writeFileSync(nombreFichero + ".json", myJson)
}
public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
    let jsonImdb = fs.readFileSync(nombreFichero +".json")
   
    return JSON.parse(jsonImdb)
    
} 
}