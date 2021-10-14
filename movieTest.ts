import { Movie } from "./movie";
import { Professional } from './Professional';
let peli1 = new Movie("Capitán América: El primer vengador", 2011, "estadounidense","acción");
let peli2 = new Movie("Malditos Bastardos", 2009, "estadounidense", "bélica");
let peli3 = new Movie("Mar adentro", 2004, "espanyola", "drama");
let peli4 = new Movie("La maldición", 2003, "japonesa", "terror");

let pro1 = new Professional("Brad Pitt", 57, "masculino", 75, 1.8, "rubio", "azules", "caucásico", false, "norteamericano", 2, "actor")
let pro2 = new Professional("Scarlett Johansson", 36, "femenino", 54, 1.6, "rubio", "marrones", "caucásico", true, "norteamericano", 0, "actor")
let pro3 = new Professional("Robert Downey Jr.", 56, "masculino", 57, 1.74, "castaño", "marrones", "caucásico", true, "norteamericano", 0, "actor")
let pro4 = new Professional("Chris Hemsworth", 38, "masculino", 72, 1.9, "castaño", "marrones", "caucásico", true, "australiano", 0, "actor")
let pro5 = new Professional("Stan Lee", 98, "masculino", 66, 1.8, "blanco", "marrones", "caucásico", true, "norteamericano", 0, "writer")
let pro6 = new Professional("Kevin Feige", 48, "masculino", 71, 1.82, "castaño", "marrones", "caucásico", true, "norteamericano", 0, "producer")

peli1.actors = [pro1, pro2, pro3, pro4];
peli1.writer = pro5;
peli1.producer = pro6; 
peli1.printMovie()
peli2.printMovie()
peli3.printMovie()
peli4.printMovie()
