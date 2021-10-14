import { Professional } from './Professional';
export class Movie{
    public title:string;
    public releaseYear:number;
    public actors: Professional [];
    public nacionality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public plataform:string;
    public mainCharacterName:string;
    public producer:Professional;
    public distributor:string;
    public genre:string

    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    // Métodos públicos
    public printMovie(){
        for (let datos in this){
            if (typeof(this[datos])!= "function"){
                console.log(datos + ": " + this[datos])
            }
        }
    }
}
