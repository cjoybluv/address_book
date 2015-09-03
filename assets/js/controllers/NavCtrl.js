AddressBookApp.controller('NavCtrl',['$scope','$location',function($scope,$location){
  $scope.navCollapsed = true;

  $scope.search = function() {
    console.log('searching...',$scope.searchTerm);

    $location
    .path('/search')
    .search({q:$scope.searchTerm});

  }
}]);
