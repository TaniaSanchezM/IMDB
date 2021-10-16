import { Movie } from "./movie";
import { Imdb } from './imdb';
import { join } from "path/posix";
let fs = require('fs')
let rl = require('readline-sync');

let peli1 = new Movie("Capitán América: El primer vengador", 2011, "estadounidense","acción");
let peli2 = new Movie("Malditos Bastardos", 2009, "estadounidense", "bélica");
let peli3 = new Movie("Mar adentro", 2004, "espanyola", "drama");
let peli4 = new Movie("La maldición", 2003, "japonesa", "terror");

let myImdb = new Imdb ([peli1, peli2, peli3, peli4])
// console.log(myImdb) 


// AVANZADO
let myJsonImdb = JSON.stringify(myImdb);
// console.log(myJsonImdb);
// console.log(typeof(myJsonImdb));


// fs.writeFileSync('./myJson.json', myJsonImdb);

// let bbddImdb = fs.readFileSync('./imdbBBDD.json')
// let bbddObjImdb = JSON.parse(bbddImdb)
// let myBbdd = new Imdb(bbddObjImdb);
// console.log(myBbdd)

// myImdb.escribirEnFicheroJSON("myImdb")
// let pruebaMetodo = new Imdb([])
// console.log(pruebaMetodo.obtenerInstanciaIMDB("imdbBBDD"))

let tituloX : string = rl.question("Escribe el titulo de la pelicula: ");
let anyoX : number = parseInt(rl.question("Escribe el anyo de lanzamiento: "));
let nacionalidadX : string = rl.question("Escribe la nacionalidad de la pelicula: ");
let generoX : string = rl.question("Escribe el genero de la pelicula: ");
let idiomaX : string = rl.question("Escribe el idioma de la pelicula: ");
let plataformaX : string = rl.question("Escribe la plataforma de la pelicula: ");
let esMarvel : boolean = rl.question("¿La pelicula pertenece al universo cinematografico de Marvel? ");
let persPpalX : string = rl.question("¿Cual es el nombre del personaje principal?");
let distribuidorX : string = rl.question("Escribe el distribuidor de la pelicula: ");

let peliX = new Movie(tituloX, anyoX, nacionalidadX, generoX);
peliX.language = idiomaX;
peliX.plataform = plataformaX;
peliX.isMCU = esMarvel;
peliX.mainCharacterName = persPpalX;
peliX. distributor = distribuidorX;
console.log(peliX)


let pruebaCartelera = myImdb.obtenerInstanciaIMDB("imdbBBDD")
pruebaCartelera.push(peliX)

let prueba2 = JSON.stringify(pruebaCartelera)
fs.writeFileSync("./Cartelera.json", prueba2)


