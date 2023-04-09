const express = require('express');
const router = express.Router();
const customerQueries = require('../db/queries/customers');

router.get('/', (req, res) => {
  customerQueries.getCustomers()
    .then(customers => {
      res.json({ customers });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//Get customer/:id
router.get('/:id', (req, res) => {
  const customerID = req.params.id;
  customerQueries.getCustomerByID(customerID)
    .then(customer => {
      res.json({ customer });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
