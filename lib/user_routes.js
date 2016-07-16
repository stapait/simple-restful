let User = require('./user_model');

module.exports = function (app) {
  app.get('/user/:application/:id', function (req, res) {
    let user = userFromParams(req.params);
    user.find(function (status) {
      res.sendStatus(status);
    });
  });

  app.post('/user/:application/:id', function (req, res) {
    let user = userFromParams(req.params);
    user.insert(function (status) {
      res.sendStatus(status);
    });
  });

  app.delete('/user/:application/:id', function (req, res) {
    let user = userFromParams(req.params);
    user.remove(function (status) {
      res.sendStatus(status);
    });
  });

  function userFromParams(params) {
    return new User({ id: params.id, application: params.application });
  }
}