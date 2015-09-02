/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    notes: {
      type: 'text'
    },
    contacts: {
      collection: 'Contact',
      via: 'person'
    },
    categories: {
      collection: 'Category',
      via: 'persons'
    },

    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }

  }
};

