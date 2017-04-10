var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', 'TheaterService', function ($scope, TheaterService) {
  $scope.movies = TheaterService;
  $scope.movieSearchForm = TheaterService.searchForm;

  $scope.movieSearchFormSubmit = function() {
    TheaterService.searchOMDB();
  };
}]);

myApp.controller('SearchResultController',  ['$scope', 'TheaterService', function ($scope, TheaterService) {
  $scope.addToCollection = TheaterService.addToCollection;
  $scope.movieSearchResult = TheaterService.searchResult;
}]);

myApp.controller('DisplayController', ['$scope', 'TheaterService', function ($scope, TheaterService) {
  $scope.movies = TheaterService;
  console.log($scope.movies.collection);
}]);

myApp.factory('TheaterService', ['$http', '$httpParamSerializer', function ($http, $httpParamSerializer) {
  //private
  var formDataToSearchParams = function (formData) {
    var searchParams = {};
    searchParams.t = formData.title || '';
    searchParams.y = formData.year || '';
    searchParams.plot = 'short';
    searchParams.r = 'json';

    return searchParams;
  };

  //public
  var collection = [];

  var searchForm = {
    title: '',
    year: '',
  };

  var searchResult = {};

  var getCollectionFromDatabase = function () {
    $http.get('/movies/collection').then(function (response) {
      console.log(response.data);
      exports.collection = response.data;
    });
  };

  var resetSearchForm = function () {
    clearSearchTerms();
    searchResult.Error = "";
    searchResult.Response = "";

  };

  var clearSearchTerms = function () {
    searchForm.title = '';
    searchForm.year = '';
  };



  //Assemble return object
  var exports = {};

  exports.collection = [];
  //Get data on pageload
  getCollectionFromDatabase();

  exports.searchForm = searchForm;

  exports.searchResult = searchResult;

  exports.resetSearchForm = resetSearchForm;

  exports.addToCollection = function (movie) {
    $http.post('/movies/collection/add', movie).then(function(response) {
      resetSearchForm();
      getCollectionFromDatabase();
    });
  };

  exports.deleteFromCollection = function (id) {
    $http.delete('/movies/collection/delete/' + id).then(function (response) {
      getCollectionFromDatabase();
    });
  };

  exports.searchOMDB = function () {
    var searchParams = formDataToSearchParams(searchForm);
    var config = {
      method: 'GET',
      url: 'https://www.omdbapi.com/?',
      params: searchParams,
      paramSerializer: $httpParamSerializer
    };
    $http(config).then(function(response){
      if (response.data.Response === 'True') {
        resetSearchForm();
      }
      Object.assign(searchResult, response.data);
    });
  };

  return exports;
}]);
