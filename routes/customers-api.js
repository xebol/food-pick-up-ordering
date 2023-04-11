const express = require('express');
const router = express.Router();
const customerQueries = require('../db/queries/customers');

// Check if customer is logged in

router.get("/me", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ message: "not logged in" });
  }

 customerQueries.getCustomerByID(userId)
    .then((user) => {
      if (!user) {
        return res.send({ error: "no user with that id" });
      }

      res.send({
        user: {
          id: user.id,
          name: user.name,
          email: user.email_address,
          admin: user.admin_access
        },
      });
    })
    .catch((e) => res.send(e));
});

//Get all customers
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
