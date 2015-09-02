/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addPerson: function(req,res) {
    Category.findOne(req.params.id).then(function(category) {
      Person.find({
        where: {
          lastName: req.body.lastName,
          firstName: req.body.firstName
        }
      }).then(function(person) {
        category.persons.add(person);
        category.save(function(err,savedCategory) {
          res.send(savedCategory);
        });
      });
    });
  }

};

