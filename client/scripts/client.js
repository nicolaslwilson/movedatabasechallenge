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
    title: 'Hi',
    description: '',
    director: '',
    length: ''
  };
  console.log($scope);
  TheaterService.searchOMDB($scope.movieSearchForm);
}]);

myApp.controller('DisplayController', ['$scope', 'TheaterService', function ($scope, TheaterService) {
  console.log(TheaterService);
  $scope.movies = TheaterService;
}]);

myApp.factory('TheaterService', ['$http', '$httpParamSerializer', function ($http, $httpParamSerializer) {

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
    var searchParams = {};
    searchParams.t = formData.title;
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
