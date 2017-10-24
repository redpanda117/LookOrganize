module.exports = {
    findAll: function (req, res) {
      if (req.user) {
        db.Finance
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json({results: dbModel, sess: req.session}))
          .catch(err => res.status(422).json(err));
      }
      else { res.json({ error: "Please login", statusCode: 401 }) }
    },
    findById: function (req, res) {
      if (req.user) {
        db.Finance
          .findById(req.params.id)
          .then(dbModel => res.json({results: dbModel, sess: req.session}))
          .catch(err => res.status(422).json(err));
  
      }
      else { res.json({ error: "Please login", statusCode: 401 }) }
    },
    createFinance: function (req, res) {
      if (req.user) {
        db.Finance
          .create(req.body)
          .then(dbModel => res.json({results: dbModel, sess: req.session}))
          .catch(err => res.status(422).json(err));
  
      }
      else { res.json({ error: "Please login", statusCode: 401 }) }
    },
    updateFinance: function (req, res) {
      if (req.user) {
        db.Finance
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json({results: dbModel, sess: req.session}))
          .catch(err => res.status(422).json(err));
  
      }
      else { res.json({ error: "Please login", statusCode: 401 }) }
    },
    removeFinance: function (req, res) {
      if (req.user) {
        db.Finance
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
      else { res.json({ error: "Please login", statusCode: 401 }) }
    }
  };