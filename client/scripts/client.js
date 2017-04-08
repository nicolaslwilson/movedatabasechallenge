var cameronArray = [{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
},
{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
},
{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
},
{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
},
{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
},
{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
},
{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
},
{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
},
{
  title: 'Avatar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  director: 'James Cameron',
  length: '120'
}];

var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', 'TheaterService', function ($scope, TheaterService) {
  $scope.movies = TheaterService;
  $scope.movieSearchForm = {
    title: '',
    description: '',
    director: '',
    length: ''
  };

  $scope.movieSearchFormSubmit = function() {
    var formData = angular.copy($scope.movieSearchForm);
    TheaterService.searchOMDB(formData);
  };
}]);

myApp.controller('DisplayController', ['$scope', 'TheaterService', function ($scope, TheaterService) {
  $scope.movies = TheaterService;
}]);

myApp.factory('TheaterService', ['$http', '$httpParamSerializer', function ($http, $httpParamSerializer) {
  //private
  var formDataToSearchParams = function (formData) {
    var searchParams = {};
    searchParams.t = formData.title || '';
    searchParams.y = formData.year || '';
    searchParams.plot = 'full';
    searchParams.r = 'json';

    return searchParams;
  };

  //public
  var exports = {};

  exports.collection = cameronArray;

  exports.addMovieToArray = function (newMovie) {
    newMovie = angular.copy(newMovie);
    exports.collection.push(newMovie);
    console.log(exports.collection);
    exports.searchOMDB('http://www.omdbapi.com/?t=Alien&y=&plot=full&r=json');
  };

  exports.searchOMDB = function (formData) {
    var searchParams = formDataToSearchParams(formData);
    console.log(searchParams);
    var config = {
      method: 'GET',
      url: 'http://www.omdbapi.com/?',
      params: searchParams,
      paramSerializer: $httpParamSerializer
    };
    $http(config).then(function(response){
      console.log(response.data);
    });
  };

  return exports;
}]);
