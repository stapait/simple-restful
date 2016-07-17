'use strict';

let _ = require('lodash');

let client = require('./redis_client').client(); 

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
    
    client.get(this.id, function(err, reply) {
      if (err) {
        cb(500);
      } else {
        if (_.isNull(reply)) {
          cb(404);
        } else {
          cb(200);
        }        
      }        
    });
  }

  this.remove = function(cb) {

  }

  this.insert = function(cb) {
    if (! this.validParams()) {
      cb(400);
    }
    
    client.set(this.id, this.application, function(err, reply) {
      if (err) {
        cb(500);
      } else {
        cb(204);
      }        
    });   
  }
};

module.exports = User;