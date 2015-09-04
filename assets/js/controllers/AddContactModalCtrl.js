AddressBookApp.controller('AddContactModalCtrl', ['$scope','$modalInstance','editPerson','PersonContact', function($scope,$modalInstance,editPerson,PersonContact){

  $scope.addContact = {
    person_id: editPerson.id,
    firstName: editPerson.firstName,
    lastName: editPerson.lastName,
    contact: {
      contact_type: '',
      email: '',
      street: '',
      city: '',
      zip: '',
      phone: ''
    }
  };

  $scope.createContact = function(){

    var newContact = new PersonContact($scope.addContact.contact)
    //we could change newComment.comment ..etc here

    console.log('createContact',newContact);

    newContact.$save({
      person_id:$scope.addContact.person_id
    }).then(function(person){
      console.log('saved',person)
      $scope.addContact = '';
      $modalInstance.close();
      $scope.person = person;
    });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss();
  }

  console.log('AddContactModalCtrl',editPerson);

}]);