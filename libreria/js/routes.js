/**
 * Created by usuario1 on 5/3/2017.
 */
(function () {
    'use strict';

    angular.module('bookStore')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.
            state('home', {
                url:'/',
                templateUrl: 'component/book/book.html',
                controller: 'BookController as $ctrl',
                resolve:{
                    books:['BookService',function (BookService) {
                        return BookService.getAllBooks();
                    }]
                }
            })
            .state('tab', {
                url:'/tab/{id}',
                templateUrl: 'component/tab/tab.html',
                controller: 'TabController as $ctrl',
                resolve:{
                    addView: ['$stateParams','BookService',function ($stateParams,BookService) {
                        BookService.addCount($stateParams.id);
                        return true;
                    }],
                    book:['$stateParams','BookService',function ($stateParams,BookService) {
                        return BookService.getOneBook($stateParams.id);
                    }],
                    nextBook:['$stateParams','BookService',function ($stateParams,BookService) {
                        return BookService.getNextBook($stateParams.id);
                    }]
                }
            })
    }




})();
