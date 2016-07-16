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


}

module.exports = Settings;