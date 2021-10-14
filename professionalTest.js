"use strict";
exports.__esModule = true;
var Professional_1 = require("./Professional");
var pro1;
var pro2;
pro1 = new Professional_1.Professional("Brad Pitt", 57, "masculino", 75, 1.8, "rubio", "azules", "caucásico", false, "norteamericano", 2, "actor");
pro2 = new Professional_1.Professional("Stan Lee", 98, "masculino", 66, 1.8, "blanco", "marrones", "caucásico", true, "norteamericano", 0, "writer");
pro1.printProfessional();
pro2.printProfessional();
