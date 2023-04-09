const express = require('express');
const router = express.Router();
const orderQueries = require('../db/queries/orders');

router.get('/', (req, res) => {
  orderQueries.getOrders()
    .then(orders => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  const newOrder = {customer_id: 3, total_price: 3000, status: 'processing'};
  orderQueries
    .addOrder(newOrder)
    .then((order) => {
      res.send(order);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});


module.exports = router;
