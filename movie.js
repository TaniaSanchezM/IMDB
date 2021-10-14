"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    // Métodos públicos
    Movie.prototype.printMovie = function () {
        for (var datos in this) {
            if (typeof (this[datos]) != "function") {
                console.log(datos + ": " + this[datos]);
            }
        }
    };
    return Movie;
}());
exports.Movie = Movie;
