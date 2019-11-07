(function () {
'use strict';

angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service ('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
	.directive('foundItems', FoundItemsDirective);

// Controller
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var menu = this;
	menu.searchTerm = "";
	menu.found = [];

	// Matches for the term
	menu.searchItem = function () {
		var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm );
		promise.then(
			function (response) {
				menu.found = response;
			}
		).catch(
			function (error) {
				console.log("Something went terribly wrong.");
			}
		);
	};

	// removes from the list of found terms
	menu.removeItem = function (index) {
		menu.found.splice(index, 1);
	}
}

//Service
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
	var service = this;
	service.getMatchedMenuItems = function (searchTerm){
		return $http({
			method: "GET",
			url: ApiBasePath
		}).then( function (response) {
			 var foundItems = response.data.menu_items.filter(matchTerm => matchTerm.description.includes(searchTerm));
			 return foundItems;
		});
	};
}

// Directives
function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		restrict: "E",
		scope: {
			foundItems: '<',
			onRemove: '&'
		},
		controller: FoundItemsController,
		controllerAs: 'menu',
		bindToController: true
	};
  return ddo;
}

// Directive -- Controller
function FoundItemsController(){
	var menu = this;
}
})();
