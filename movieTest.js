"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var professionalTest_1 = require("./professionalTest");
var peli1 = new movie_1.Movie("Capitán América: El primer vengador", 2011, "estadounidense", "acción");
var peli2 = new movie_1.Movie("Malditos Bastardos", 2009, "estadounidense", "bélica");
var peli3 = new movie_1.Movie("Mar adentro", 2004, "espanyola", "drama");
var peli4 = new movie_1.Movie("La maldición", 2003, "japonesa", "terror");
peli1.actors = [professionalTest_1.pro1, professionalTest_1.pro2, professionalTest_1.pro3, professionalTest_1.pro4];
peli1.writer = professionalTest_1.pro5;
peli1.producer = professionalTest_1.pro6;
peli1.printMovie();
peli2.printMovie();
peli3.printMovie();
peli4.printMovie();
