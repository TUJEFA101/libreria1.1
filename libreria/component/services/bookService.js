/**
 * Created by usuario1 on 5/3/2017.
 */
(function () {
    'use strict';

    angular
        .module('bookStore')
        .service('BookService',BookService);

    function BookService() {
        var service = this;

        service.getAllBooks = getAllBooks;
        service.getOneBook = getOneBook;
        service.getNextBook = getNextBook;
        service.addCount = addCount;
        service.addComment = addComment;

        function getAllBooks() {
            return books;
        }
        function getOneBook(id) {
            return books[id];
        }
        function getNextBook(id) {
            id = parseInt(id);
            if(id === books.length - 1){
                return books[0];
            }else {
                //id++;
                return books[++id];
            }
        }
        function addCount(id) {
            books[id].count++;
        }
        function addComment(id,comment) {
            books[id].comments.push(comment);
            console.log(books);
        }

    }
    var books = [
        {
            "id": "1",
            "titulo": "DON QUIJOTE ",
            "autor": "Miguel de Cervantes",
            "editorial": "",
            "descripcion": "El libro, sinopsis… Nos presentan a este personaje como un loco trastornado a causa de las novelas de caballerías, pero, ¿Quién dice que el señor Quijana era sólo eso? ¿Por algún motivo será la cumbre de la literatura española verdad? Y aquí se plantea la duda héroe o simplemente viejo loco.",
            "img": "lb1.jpg", 
            "count" : 0,
            "comments":[{
                "author" : "Rafael@gmail.com",
                "content" : "Muy buen libro"
            }]
        },
        {
            "id": "2",
            "titulo": "SOY LEYENDA ",
            "autor": "Richard Matheson",
            "editorial": "",
            "descripcion": "Robert Neville, que es inmune a un virus hecho por el hombre, creado originalmente para curar el cáncer. Él trabaja para crear un antídoto mientras se defiende de los mutantes creados por el virus.",
            "img": "lb2.jpg",
            "count" : 0,
            "comments":[]
        },
        {
            "id": "3",
            "titulo": "El principito",
            "autor": "Antoine de Saint-Exupéry",
            "editorial": "",
            "descripcion": "es un clásico de la literatura francesa que ha estado sorprendiendo al mundo por generaciones. Aunque generalmente asociado preferentemente a los niños y adolescentes por su prosa ligera, es importante que los lectores no dejen pasar desapercibida la capa más profunda que subyace en el trabajo. Después de todo, Le Petit Prince refleja y pretende llevar al lector a reflexionar sobre los temas más diversos de la vida humana",
            "img": "lb3.jpg",
            "count" : 0,
            "comments":[]
        },
        {
            "id": "4",
            "titulo": "sherlock holmes",
            "autor": "Arthur Conan Doyle",
            "editorial": "",
            "descripcion": "detective asesor es inigualable en su búsqueda de delincuentes de todo tipo",
            "img": "lb4.jpg",
            "count" : 0,
            "comments":[]
        }
    ];
})();