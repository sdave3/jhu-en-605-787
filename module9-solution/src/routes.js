(function () {
'use strict';

angular.module('MenuApp')
	.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  //home page for the route
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.state.html'
  })

	// All Categories Page
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/menulist/templates/categories.state.html',
		controller: 'CategoriesController as categoriesList',
		resolve: {
			categories: ['MenuDataService', function (MenuDataService){
				return MenuDataService.getAllCategories();
			}]
		}
	})

	// items listing for catagory oage
	.state('items', {
		url: '/items/{categoryShortName}',
		templateUrl: 'src/menulist/templates/items.state.html',
		controller: 'ItemsController as itemsList',
		resolve: {
			items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams){
				return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
			}]
		}
	});

}

})();
