const express = require('express');
const router = express.Router();
const db = require('../models');
const { Cart, Cartitem, Transaction } = db;

router.get('/checkout/:userid', (req,res) => { //Open signup page
  const { userid } = req.params;
  Cart.findOne({
    where: { userId: userid  }
  })
    .then(cart => {
      Cartitem.findAll({
        where : { cartId: cart.id }
      })
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err);
      })
    })
    .catch(err => {
      res.status(400).json(err);
    })
});


router.post('/checkout', (req, res) => { //Post signup information
  res.send("POST Checkout");
});

module.exports = router;