'use strict';

/**
 * @module blueprintTest
 *
 * @description
 * Main module of the application.
 */
angular
  .module('blueprintTest', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.materialize'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

    $urlRouterProvider.otherwise('/'); // redirect to root if state is not found
  })

    .factory('mealFactory', [function () {
    return {
        recipes: [{
            "type": "Breakfast",
                "title": "Chili con carne",
                "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
                "ratings": 4,
                "ingredients": [{
                "vegetable": "40ml"
            }],
                "method": [{
                "1": "In a medium sized stock pot, heat the oil over medium heat. Saute onions, chile peppers andgarlic until soft."
            }]
        },

        {
            "type": "Main Meal",
                "title": "Main Meal",
                "description": "A spicy and fragrant chili with ground beef, kidney beans, tomatoes, onions and garlic. Best served over rice with a dollop of sour cream and some cheese on top.",
                "ratings": 4,
                "ingredients": [{
                "vegetable": "40ml"
            }],
                "method": [

            {
                "1": "In a medium sized stock pot, heat the oil over medium heat. Saute onions, chile peppers andgarlic until soft."
            }]
        }]
    };
    }]);
