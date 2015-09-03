AddressBookApp.controller('HomeCtrl', ['$scope','Person','$modal', function($scope,Person,$modal){
  // console.log('Home controller');

  $scope.persons = [];
  $scope.orderField = 'title';

  Person.query().then(function(persons) {
    $scope.persons = persons;
    // console.log('HomeCtrl',persons[3].getFullName());
  });

  $scope.deletePerson = function(person){
    person.$delete();
  };

  $scope.editPerson = function(person) {
    console.log('editperson',person);
    $modal.open({
      templateUrl:'/views/person/editModal.html',
      controller:'PersonEditModalCtrl',
      resolve:{
        editPerson: function(){
          return person;
        }
      }
    });
  }

}]);