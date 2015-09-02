/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addCategory: function(req,res) {
    Person.findOne(req.params.id).then(function(person) {
      Category.findOrCreate({
        where: {
          name: req.body.name
        }
      }).then(function(category) {
        console.log('person fullName',person.getFullName());
        person.categories.add(category);
        person.save(function(err,savedPerson) {
          res.send(savedPerson);
        });
      });
    });
  }

};

