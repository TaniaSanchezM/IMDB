import { Professional } from "./Professional"

let pro1: Professional;
let pro2: Professional;
pro1 = new Professional("Brad Pitt", 57, "masculino", 75, 1.8, "rubio", "azules", "caucásico", false, "norteamericano", 2, "actor")
pro2 = new Professional("Stan Lee", 98, "masculino", 66, 1.8, "blanco", "marrones", "caucásico", true, "norteamericano", 0, "writer")

pro1.printProfessional();
pro2.printProfessional();