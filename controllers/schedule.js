const db = require("../models");

module.exports = {
findAllEvents: function (req, res) {
    if (req.user) {
      db.Events
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  }
};