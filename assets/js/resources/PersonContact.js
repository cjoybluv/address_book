AddressBookApp.factory('PersonContact', ['sailsResource', function(sailsResource){
  return sailsResource('Contact',{

    query:{
      method:'GET',
      url:'/api/person/:person_id/contacts',
      isArray: true
    },
    get:{
      method:'GET',
      url:'/api/person/:person_id/contacts/:id'
    },
    save:{
      method:'POST',
      url:'/api/person/:person_id/contacts'
    }

  });
}]);

