AddressBookApp.controller('PersonEditModalCtrl', ['$scope','$modalInstance','editPerson', function($scope,$modalInstance,editPerson){

  $scope.newPerson = {
    firstName: editPerson.firstName,
    lastName: editPerson.lastName,
    Notes: editPerson.Notes
  };

  $scope.updatePerson = function(){
    editPerson.firstName = $scope.newPerson.firstName;
    editPerson.lastName = $scope.newPerson.lastName;
    editPerson.Notes = $scope.newPerson.Notes;
    editPerson.$save().then(function(){
      $modalInstance.close();
    });
  }

  $scope.cancel = function() {
    $modalInstance.dismiss();
  }

  console.log('PersonEditModalCtrl',editPerson);

}]);