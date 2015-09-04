
var AddressBookApp = angular.module('AddressBookApp',['ui.bootstrap','ngRoute','sailsResource','ngMessages']);

AddressBookApp.run(function(){
  console.log('AddressBook reporting for duty');
});

AddressBookApp.config(['$routeProvider','$locationProvider','sailsResourceProvider',function($routeProvider, $locationProvider,sailsResourceProvider){

  sailsResourceProvider.configuration = {
    prefix: '/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about',{
    templateUrl: '/views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/person/new', {
    templateUrl:'/views/person/new.html',
    controller: 'PersonNewCtrl'
  })
  .when('/person/:id',{
    templateUrl:'/views/person/show.html',
    controller:'PersonShowCtrl'
  })
  .when('/test',{
    templateUrl:'/views/test.html',
    controller:'TestCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  });

}]);

