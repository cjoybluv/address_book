

Person.findOne('55e6196353234f451dd94904').then(function(person){
  console.log(person.getFullName());
}).catch(function(err){
  console.log(err);
});


