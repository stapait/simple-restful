'use strict';

var _ = require('lodash');

var Settings = function () {
  this.serverPort = function () {
    if (_.isUndefined(process.env.SERVER_PORT) || _.isNull(process.env.SERVER_PORT)) {
      return 3000;
    } else {
      return parseInt(process.env.SERVER_PORT);
    }
  }

  // The URL of the Redis server
  // Format: [redis:]//[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]
  this.redisUrl = function () {
    if (_.isUndefined(process.env.REDIS_URL) || _.isNull(process.env.REDIS_URL)) {
      return 'redis://127.0.0.1:6379';
    } else {
      return process.env.REDIS_URL;
    }
  }
}

module.exports = Settings;