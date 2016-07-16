'use strict';

let expect = require("chai").expect;

let Settings = require('../lib/settings');

describe('Settings', function () {
  let settings;
  before(function () {
    settings = new Settings();
  });

  describe('#serverPort()', function () {
    describe('when environment variable SERVER_PORT is set to 8000', function () {
      it('returns 8000', function () {
        process.env.SERVER_PORT = 8000;
        expect(settings.serverPort()).to.equal(8000);
        delete process.env.SERVER_PORT;
      });
    });
    describe('when environment variable SERVER_PORT is not set', function () {
      it('returns default port 3000', function () {
        expect(settings.serverPort()).to.equal(3000);
      });
    });
  });
});