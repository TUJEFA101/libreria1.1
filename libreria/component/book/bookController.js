/**
 * Created by usuario1 on 5/3/2017.
 */
(function () {
    'use strict';

    angular
        .module('bookStore')
        .controller('BookController',BookController);


    BookController.$inject = ['books'];
    function BookController(books)  {
        var $ctrl = this;
        $ctrl.books = books;

    }

})();