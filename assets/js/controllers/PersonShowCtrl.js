AddressBookApp.controller('PersonShowCtrl', ['$scope','Person','$routeParams', '$http','PersonContact','$modal', function($scope,Person,$routeParams,$http,PersonContact,$modal){

  $scope.person = {};

  Person.get({id: $routeParams.id }).then(function(person){
    console.log('routeParams.id',$routeParams.id);
    $scope.person = person;
  });

  $scope.addCategory = function(){
    console.log('addCategory',$scope.categoryNameToAdd);
    console.log('addCategory:person',$scope.person);


    $http({
        method: 'POST',
        url: '/api/person/'+$scope.person.id+'/categories',
        data:{
          name: $scope.categoryNameToAdd
        }
      }).success(function(data) {
        console.log('addCategory:success',data);
        $scope.person = data;
        $scope.categoryNameToAdd = '';
    });
  };

  $scope.addContact = function(person) {
    console.log('addContact',person);
    $modal.open({
      templateUrl:'/views/person/addContactModal.html',
      controller:'AddContactModalCtrl',
      resolve:{
        editPerson: function(){
          return person;
        }
      }
    });

  };

}]);