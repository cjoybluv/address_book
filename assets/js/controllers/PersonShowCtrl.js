AddressBookApp.controller('PersonShowCtrl', ['$scope','Person','$routeParams', function($scope,Person,$routeParams){

  $scope.person = {};

  Person.get({id: $routeParams.id }).then(function(person){
    console.log('routeParams.id',$routeParams.id);
    $scope.person = person;
  });

}]);