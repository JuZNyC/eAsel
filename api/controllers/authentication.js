const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;


router.post('/signup', (req,res) => { //Open signup page
  res.redirect(307, "../users/new");
});

router.get('/signin', (req,res) => { //signin page
  const { email } = req.body;
  User.findOne({
    where: { email }
  })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;