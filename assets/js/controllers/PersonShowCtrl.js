AddressBookApp.controller('PersonShowCtrl', ['$scope','Person','$routeParams', '$http', function($scope,Person,$routeParams,$http){

  $scope.person = {};

  Person.get({id: $routeParams.id }).then(function(person){
    console.log('routeParams.id',$routeParams.id);
    $scope.person = person;
  });

  // $scope.addCategory = function(){
  //   console.log('addCategory',$scope.categoryNameToAdd);
  //   console.log('addCategory:person',$scope.person);


  //   // $http({
  //   //     method: 'POST',
  //   //     url: '/api/person/'+$scope.person.id+'/categories',
  //   //     params:{
  //   //       name: $scope.categoryNameToAdd
  //   //     }
  //   //   }).success(function(data) {
  //   //     console.log('addCategory:success',data);
  //   // });

  // };

}]);