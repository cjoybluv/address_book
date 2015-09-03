AddressBookApp.controller('PersonNewCtrl', ['$scope','Person','$location', function($scope,Person,$location){
  console.log('PersonNewCtrl now');

  $scope.newPerson={
    title:'',
    body:''
  };

  $scope.createPerson = function() {
    var newPerson = new Person($scope.newPerson);
    newPerson.$save().then(function(personResult){
      console.log('person',personResult);
      $location.path('/');
    }).catch(function(err){
      alert('err '+err.toString());
      console.log('err',err);
    });
  };

  console.log('PersonNewCtrl now');

}]);