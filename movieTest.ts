import { Movie } from "./movie";
import { Professional } from './Professional';
import {pro1, pro2, pro3, pro4, pro5, pro6} from "./professionalTest"
let peli1 = new Movie("Capitán América: El primer vengador", 2011, "estadounidense","acción");
let peli2 = new Movie("Malditos Bastardos", 2009, "estadounidense", "bélica");
let peli3 = new Movie("Mar adentro", 2004, "espanyola", "drama");
let peli4 = new Movie("La maldición", 2003, "japonesa", "terror");

peli1.actors = [pro1, pro2, pro3, pro4];
peli1.writer = pro5;
peli1.producer = pro6;
peli1.printMovie()
peli2.printMovie()
peli3.printMovie()
peli4.printMovie()