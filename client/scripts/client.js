var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', 'TheaterService', function ($scope, TheaterService) {
  $scope.movies = TheaterService;
  $scope.newMovie = {
    title: '',
    description: '',
    director: '',
    length: ''
  };

}]);

myApp.controller('DisplayController', ['$scope', 'TheaterService', function ($scope, TheaterService) {
  console.log(TheaterService);
  $scope.movies = TheaterService;
}]);

myApp.factory('TheaterService', [function () {
  var exports = {};
  exports.collection = [{
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
  exports.addMovieToArray = function (newMovie) {
    newMovie = angular.copy(newMovie);
    exports.collection.push(newMovie);
    console.log(exports.collection);
  };

  return exports;
}]);
