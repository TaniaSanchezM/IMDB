import { Movie } from "./movie";
import {Imdb} from "./imdb"

let peli1 = new Movie("Capitán América: El primer vengador", 2011, "estadounidense","acción");
let peli2 = new Movie("Malditos Bastardos", 2009, "estadounidense", "bélica");
let peli3 = new Movie("Mar adentro", 2004, "espanyola", "drama");
let peli4 = new Movie("La maldición", 2003, "japonesa", "terror");

let myImdb = new Imdb ([peli1, peli2, peli3, peli4])
console.log(myImdb) 