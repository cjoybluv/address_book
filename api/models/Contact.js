/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var geocoder = require('geocoder');

module.exports = {

  attributes: {
    contact_type: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email'
    },
    street: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    zip: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    lat: {
      type: 'float'
    },
    lng: {
      type: 'float'
    },
    person: {
      model: 'Person',
      defaultsTo: null
    }

  },

  beforeCreate: function(values,cb) {
    var address = values.street + ', ' + values.city + ', ' + values.zip;
    geocoder.geocode(address, function ( err, data ) {
      // console.log(data.results[0].geometry.location.lat,data.results[0].geometry.location.lng);
      values.lat = data.results[0].geometry.location.lat;
      values.lng = data.results[0].geometry.location.lng;
      cb();
    });
  }
};

