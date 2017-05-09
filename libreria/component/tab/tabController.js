/**
 * Created by usuario1 on 5/3/2017.
 */
(function () {
    'use strict';

    angular
        .module('bookStore')
        .controller('TabController',TabController);

    TabController.$inject = ['book','nextBook','BookService','$state'];
    function TabController(book,nextBook,BookService,$state) {
        var $ctrl = this;
        $ctrl.book = book;
        $ctrl.nextBook = nextBook;
        $ctrl.comment = {};
        $ctrl.addComment = function (id,comment) {
            console.log(comment);
            if(comment.author === undefined){
                $ctrl.emailValidate= true;
                return;
            }
            BookService.addComment(id,comment);
            $ctrl.comment = {};
            $state.reload();
        }

    }
})();