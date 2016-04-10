'use strict';

(function () {

  angular
    .module('blueprintTest')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.about', {
          url         : '/about',
          templateUrl : 'app/views/about/about.view.html',
          controller  : 'AboutCtrl',
          controllerAs: 'AboutCtrl',
          title       : 'about'
        });
    });

}());
