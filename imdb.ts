import { Movie } from "./movie";
import { Professional } from "./Professional";
import {pro1, pro2, pro3, pro4, pro5, pro6} from "./professionalTest"

export class Imdb{
    public peliculas:Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas
    }
}