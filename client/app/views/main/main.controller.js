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
    
    var checkboxes = [
    {
        title : "Title One",
        id: "Id1",
        for: "Id1", 
        model: false
    },
       {
        title : "Title Two",
        id: "Id2",
        for: "Id2",
        model: false  
    }
    
];  
      
    var checkboxes2 = [
    {
        title : "2Title One",
        id: "2Id1",
        for: "2Id1",
        model: false
    },
       {
        title : "2Title Two",
        id: "2Id2",
        for: "2Id2",
        model: false
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
      
    $scope.listOfThings1 =  [
        {
            title: 'List of Things Title 1',
            content: 'List og Things Content 1',
            
            
        },
         {
            title: 'List of Things Title 2',
            content: 'List og Things Content 2',
             
            
        },    
    ]
    
     $scope.listOfThings2 =  [
        {
            title: '2 List of Things Title 1',
            content: '2 List og Things Content 1',
            
            
        },
         {
            title: '2 List of Things Title 2',
            content: '2 List og Things Content 2',
           
        },    
    ]
      
console.log($scope.collapsibleElements[0].content[0].model);

  }

})();
