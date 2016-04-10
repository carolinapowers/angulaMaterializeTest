'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for blueprintTest
 */
(function() {

  angular
    .module('blueprintTest')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope,mealFactory) {
    var vm = this;

    vm.user = { username: 'USER'};
      
    $scope.recipes = mealFactory.recipes;
    $scope.selectedMeals = [];
    
    var checkboxes = [
    {
        title : "Title One",
        id: "Id1",
        for: "Id1"
    },
       {
        title : "Title Two",
        id: "Id2",
        for: "Id2"
    }
    
];  
      
    var checkboxes2 = [
    {
        title : "2Title One",
        id: "2Id1",
        for: "2Id1"
    },
       {
        title : "2Title Two",
        id: "2Id2",
        for: "2Id2"
    }
    
];  
      
    $scope.collapsibleElements = [{
        icon: 'mdi-image-filter-drama',
        title: 'First',
        content: checkboxes
    },{
        icon: 'mdi-maps-place',
        title: 'Second',
        content: checkboxes2
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    }
];  
      
      console.log($scope.collapsibleElements[0].content);
      


  }

})();
