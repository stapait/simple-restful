'use strict';

let _ = require('lodash');

let client = require('./redis_client').client();

let HttpStatus = require('./http_status');

var User = function (args) {
  _.extend(this, args);

  this.validParams = function () {
    if (_.isUndefined(this.id) || _.isNull(this.id)) {
      return false;
    }
    if (_.isUndefined(this.application) || _.isNull(this.application)) {
      return false;
    }
    return true;
  }

  this.find = function (cb) {
    if (!this.validParams()) {
      cb(HttpStatus.BAD_REQUEST);
    }

    client.sismember(this.application, this.id, function (err, reply) {
      if (err) {
        cb(HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        if (reply == "1") {
          cb(HttpStatus.OK);
        } else {
          cb(HttpStatus.NOT_FOUND);
        }
      }
    });
  }

  this.remove = function (cb) {
    if (!this.validParams()) {
      cb(HttpStatus.BAD_REQUEST);
    }

    client.srem(this.application, this.id, function (err, reply) {
      if (err) {
        cb(HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        if (reply == "1") {
          cb(HttpStatus.OK);
        } else {
          cb(HttpStatus.NOT_FOUND);
        }
      }
    });
  }

  this.insert = function (cb) {
    if (!this.validParams()) {
      cb(HttpStatus.BAD_REQUEST);
    }

    client.sadd(this.application, this.id, function (err, reply) {
      if (err) {
        cb(HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        cb(HttpStatus.NO_CONTENT);
      }
    });
  }

  this.findAll = function (cb) {
    if (_.isUndefined(this.application) || _.isNull(this.application)) {
      cb(HttpStatus.BAD_REQUEST);
    }

    client.smembers(this.application, function (err, reply) {
      if (err) {
        cb({ status: 'error' });
      } else {
        cb({ status: 'ok', result: reply });        
      }
    });
  }

};

module.exports = User;