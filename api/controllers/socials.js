const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');
const { Social } = db;

router.post('/:userid', (req, res) => {
    const { userid }  = req.params;
    const { facebook, linked, instagram, twitter } = req.body;
    Social.create({
        linkedin,facebook,instagram,twitter,
        userId: userid
    }) .catch(err => {
      res.status(400).json(err);
    })
})
module.exports = router;