let redis = require("redis");
let redisClient;

module.exports = {
  start: function (settings) {
    redisClient = redis.createClient({ url: settings.redisUrl() });

    redisClient.on("error", function (err) {
      console.log("Error " + err);
    });

    redisClient.on("connect", function () {
      console.log("Redis connected");
    });
  },

  client: function () {
    return redisClient;
  }
} 