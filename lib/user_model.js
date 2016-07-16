'use strict';

let _ = require('lodash');

var User = function (args) {
  _.extend(this, args);

  this.validParams = function() {
    if (_.isUndefined(this.id) || _.isNull(this.id)) {      
      return false;
    }
    if (_.isUndefined(this.application) || _.isNull(this.application)) {
      return false;
    }
    return true;
  }

  this.find = function(cb) {
    if (! this.validParams()) {
      cb(400);
    }

    cb(404);
  }

  this.remove = function(cb) {

  }

  this.insert = function(cb) {

  }
};

module.exports = User;