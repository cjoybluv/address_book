AddressBookApp.factory('PersonCategory', ['sailsResource', function(sailsResource){
  return sailsResource('Category',{

    query:{
      method:'GET',
      url:'/api/person/:person_id/categories',
      isArray: true
    },
    get:{
      method:'GET',
      url:'/api/person/:person_id/categories/:id'
    },
    save:{
      method:'POST',
      url:'/api/person/:person_id/categories'
    }

  });
}]);

