import { Professional } from "./Professional"

let pro1: Professional;
let pro2: Professional;
let pro3: Professional;
let pro4: Professional;
let pro5: Professional;
let pro6: Professional;

pro1 = new Professional("Brad Pitt", 57, "masculino", 75, 1.8, "rubio", "azules", "caucásico", false, "norteamericano", 2, "actor")
pro2 = new Professional("Scarlett Johansson", 36, "femenino", 54, 1.6, "rubio", "marrones", "caucásico", true, "norteamericano", 0, "actor")
pro3 = new Professional("Robert Downey Jr.", 56, "masculino", 57, 1.74, "castaño", "marrones", "caucásico", true, "norteamericano", 0, "actor")
pro4 = new Professional("Chris Hemsworth", 38, "masculino", 72, 1.9, "castaño", "marrones", "caucásico", true, "australiano", 0, "actor")
pro5 = new Professional("Stan Lee", 98, "masculino", 66, 1.8, "blanco", "marrones", "caucásico", true, "norteamericano", 0, "writer")
pro6 = new Professional("Kevin Feige", 48, "masculino", 71, 1.82, "castaño", "marrones", "caucásico", true, "norteamericano", 0, "producer")


pro1.printProfessional();
pro2.printProfessional();
pro3.printProfessional();
pro4.printProfessional();
pro5.printProfessional();
pro6.printProfessional();